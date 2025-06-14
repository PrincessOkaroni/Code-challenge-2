## Event Guest List Manager

## Description

The Event Guest List Manager is a browser-based web application built with HTML, JavaScript, and CSS to dynamically manage an event's guest list. Users can add guests by entering their name and selecting a category (Friend, Family, or Colleague) through a form, view the guest list in a table, and perform actions like editing names, deleting guests, or toggling RSVP status (Pending/Confirmed). Key features include:

Color-coded Categories: Guests are categorized with visually distinct color tags (green for Friend, blue for Family, yellow for Colleague).

Timestamps: Each guest entry shows the time they were added.

Edit Functionality: Users can update guest names via an edit button.

Custom Feature (RSVP Toggle): A button allows toggling RSVP status between Pending and Confirmed.

Duplicate Prevention: The app prevents adding or editing guests with the same name and category.

Local Storage: Guest data persists across browser sessions using localStorage.

Responsive Design: The interface adapts to different screen sizes.

The application supports a maximum of 10 guests and is designed for a code challenge, emphasizing DOM manipulation, event handling, and a seamless user experience without page reloads.

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:PrincessOkaroni/Code-challenge-2.git
   cd code-challenge-2
   ```

2. **Open the project folder:**

   - You can open the folder in your preferred code editor i.e vs code.

3. **Run the application:**

   - Simply open `index.html` in your web browser. No build tools or server setup are required.

4. **Project Structure:**

   ```
   code-challenge-2/

   ├── index.html        # Main HTML file
   ├── index.js          # JavaScript logic for guest management
   ├── style.css         # Styles for the application
   └── README.md         # Project documentation
   ```

5. **Usage:**

Enter a guest's name and select a category (Friend, Family, or Colleague) in the form to add them.

View the guest list in a table, showing names, categories, timestamps, RSVP status, and action buttons (Edit, Delete, RSVP toggle).

Edit a guest's name, toggle their RSVP status, or delete them using the respective buttons.

The app prevents duplicate guests (same name and category) and limits the list to 10 guests.

Guest data is saved in localStorage and persists after browser refresh.

**Note:**  
No additional dependencies are required. All functionality is handled with plain HTML, CSS, and JavaScript.

## Author

Princess Okaroni  
[GitHub: PrincessOkaroni](https://github.com/PrincessOkaroni)

## License

This project is licensed under the [ISC License](LICENSE).

Copyright (c) 2025 Princess Okaroni
