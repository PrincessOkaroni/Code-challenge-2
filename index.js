document.addEventListener("DOMContentLoaded", () => {
  const guestForm = document.getElementById("guest-form");
  const guestNameInput = document.getElementById("guest-name");
  const guestCategorySelect = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");
  const guestCountDisplay = document.getElementById("guest-count");
  const maxGuests = 10;
  let guestCount = 0;

  // Load guests from localStorage
  let guests = JSON.parse(localStorage.getItem("guests")) || [];
  guests = guests.map((guest) => ({
    ...guest,
    timestamp: guest.timestamp || "Unknown",
    rsvp: guest.rsvp || "Pending",
  }));
  guestCount = guests.length;
  updateGuestCount();
  renderGuestList();

  // Handle form submission
  guestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (guestCount >= maxGuests) {
      alert("Maximum guest limit reached (10 guests).");
      return;
    }
    const name = guestNameInput.value.trim();
    const category = guestCategorySelect.value;

    // Check for duplicate guest (same name and category)
    const guestExists = guests.some(
      (guest) =>
        guest.name.toLowerCase() === name.toLowerCase() &&
        guest.category === category
    );
    if (guestExists) {
      alert("Guest exists");
      return;
    }

    if (name && category !== "Choose guest-category") {
      const timestamp = new Date().toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "short",
      });
      const guest = {
        id: Date.now(),
        name,
        category,
        timestamp,
        rsvp: "Pending",
      };
      guests.push(guest);
      guestCount++;
      updateGuestCount();
      renderGuestList();
      saveGuests();
      guestForm.reset();
    } else {
      alert("Please enter a name and select a category.");
    }
  });

  // Handle guest list clicks (delete/edit/rsvp)
  guestList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = parseInt(e.target.dataset.id);
      guests = guests.filter((guest) => guest.id !== id);
      guestCount--;
      updateGuestCount();
      renderGuestList();
      saveGuests();
    } else if (e.target.classList.contains("edit-btn")) {
      const id = parseInt(e.target.dataset.id);
      const guest = guests.find((g) => g.id === id);
      const newName = prompt("Enter new name:", guest.name);
      if (newName && newName.trim()) {
        // Check if new name with same category exists
        const nameExists = guests.some(
          (g) =>
            g.id !== id &&
            g.name.toLowerCase() === newName.trim().toLowerCase() &&
            g.category === guest.category
        );
        if (nameExists) {
          alert("Guest with this name and category already exists");
          return;
        }
        guest.name = newName.trim();
        renderGuestList();
        saveGuests();
      }
    } else if (e.target.classList.contains("rsvp-btn")) {
      const id = parseInt(e.target.dataset.id);
      const guest = guests.find((g) => g.id === id);
      guest.rsvp = guest.rsvp === "Pending" ? "Confirmed" : "Pending";
      renderGuestList();
      saveGuests();
    }
  });

  // Update guest count display
  function updateGuestCount() {
    guestCountDisplay.textContent = `Guests: ${guestCount}/${maxGuests}`;
  }

  // Render the guest list
  function renderGuestList() {
    const tbody = guestList.querySelector("tbody");
    tbody.innerHTML = "";
    guests.forEach((guest) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${guest.name}</td>
          <td><span class="category-tag category-${guest.category.toLowerCase()}">${
        guest.category
      }</span></td>
          <td>${guest.timestamp || "Unknown"}</td>
          <td>
            <span class="rsvp-status">${guest.rsvp}</span>
            <button class="rsvp-btn" data-id="${guest.id}">${
        guest.rsvp === "Pending" ? "Confirm" : "Unconfirm"
      }</button>
          </td>
          <td>
            <button class="edit-btn" data-id="${guest.id}">Edit</button>
            <button class="delete-btn" data-id="${guest.id}">Delete</button>
          </td>
        `;
      tbody.appendChild(tr);
    });
  }

  // Save guests to localStorage
  function saveGuests() {
    localStorage.setItem("guests", JSON.stringify(guests));
  }
});
