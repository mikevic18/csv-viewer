**CSV Viewer - Vanilla HTML/JS Documentation**

**Introduction:**

The CSV Viewer project is a web application designed to provide users with an efficient and user-friendly way to view and search CSV files. This application allows users to either drag and drop CSV files into the designated drop zone or select files using a file input field. The uploaded CSV file's data is then displayed in a well-organized HTML table format, enabling users to easily visualize and analyze the data.

**Project Objectives:**

The primary objectives of the CSV Viewer project are as follows:

1. **Easy CSV Viewing:** The project aims to create a seamless and straightforward method for viewing CSV files. Users can effortlessly drag and drop files or use the file input field, resulting in instant rendering of the CSV data in a user-friendly tabular format.

2. **User-Friendly Interface:** The application provides a visually appealing and intuitive user interface. Utilizing user-friendly design principles, the project ensures that users can navigate and interact with the application with ease.

3. **Efficient Search Functionality:** To enhance data exploration, the CSV Viewer incorporates a robust search functionality. Users can input search queries, and the application dynamically filters the table rows, displaying only the relevant data matching the search criteria.

**Methodologies and Best Practices:**

To achieve the project's objectives and create a well-structured and maintainable codebase, the following methodologies and best practices were employed:

1. **Modular Code Structure:** The project codebase follows a modular approach, with distinct separation of concerns. Components like the HTML structure, CSS styling, and JavaScript functionality are separated into their respective files, promoting code organization and maintainability.

2. **Reusable Components:** Throughout the project, small and reusable components are utilized, ensuring code reusability and promoting a more efficient development process. This allows for easier extension and adaptation of the application in future updates.

3. **External Libraries:** The project takes advantage of external libraries, such as jQuery, Font Awesome, Bootstrap, and SweetAlert2. These libraries enhance functionality and provide pre-designed elements for a more polished and responsive user interface.

4. **Responsive Design:** The project incorporates responsive design principles, ensuring that the application adapts to various screen sizes and devices. It enables users to have a consistent and pleasant experience across desktops, tablets, and smartphones.

5. **Clear Documentation:** The code is extensively documented to provide comprehensive explanations of functions, event listeners, and CSS styles. This documentation helps developers understand the codebase quickly and simplifies future maintenance and updates.

**Project Structure:**



- **index.html**

This HTML file provides the structure for a CSV viewer web application. It includes necessary CSS and JavaScript files for styling and functionality. Below is the documentation for the various components and elements present in the HTML file:

1. **Document Type Declaration:**
   - `<!DOCTYPE html>`: Specifies the document type as HTML5.

2. **HTML Structure:**
   - `<html>`: The root element of the HTML document.
   - `<head>`: Contains meta-information about the document, such as the page title, linked resources, and scripts.
   - `<title>`: The title of the web page displayed in the browser's title bar or tab.
   - External Scripts and Stylesheets: The following external resources are linked to the HTML file:
     - Font Awesome: `<script src="https://kit.fontawesome.com/4becc50081.js" crossorigin="anonymous"></script>`
     - Google Fonts: `<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">`
     - Bootstrap CSS: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css">`
     - Custom CSS: `<link rel="stylesheet" href="assets/css/style.css">`
     - SweetAlert2 CSS: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.1.4/dist/sweetalert2.min.css">`

3. **Body Content:**
   - `<body>`: Contains the visible content of the web page.
   - `<div class="container mt-5">`: A container to hold the entire content with top margin.
   - `<h1 class="mb-4">CSV Viewer</h1>`: The main heading of the web application.
   - `<div id="fileDropContainer" class="container">`: A container for the CSV file drop zone.
     - `<div class="row mt-5">`: A row for layout.
       - `<div class="col-md-6 mx-auto">`: A column for layout.
         - `<div class="drop-zone" id="csvFileDropZone">`: The drop zone for dragging and dropping CSV files.
           - `<i class="fas fa-cloud-upload-alt icon"></i>`: An icon to represent uploading files.
           - `<div class="text">Drag and drop a CSV file here or click to upload</div>`: Text inside the drop zone to instruct the user.
         - `<input type="file" id="csvFileInput" accept=".csv" style="display: none;">`: Hidden file input for selecting CSV files.
   - `<div class="mt-3">`: A top margin for the table and search input.
     - `<div class="table_head">`: A container for the title and search input.
       - `<h1 id="fileTitle" class="mb-7">Title Here</h1>`: The title of the loaded CSV file will appear here.
       - `<input type="text" id="searchInput" placeholder="Search...">`: Input field to search/filter the table rows based on user input.
     - `<div id="csvTable">`: The HTML table to display the CSV file's data will be dynamically generated and displayed here.

4. **Script Tags:**
   - `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`: The jQuery library for DOM manipulation and AJAX requests.
   - `<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.1.4/dist/sweetalert2.all.min.js"></script>`: SweetAlert2 library for displaying error messages.
   - `<script src="assets/js/script.js"></script>`: The custom JavaScript file (script.js) responsible for handling CSV file loading and table creation.



- **./assets/js/script.js**

    The JavaScript file provides functionality for viewing and searching CSV files. It allows users to drag and drop a CSV file into a designated drop zone or select a file using a file input field. The file's content is then displayed in an HTML table format, enabling easy visualization and filtering of data.

    Below is the documentation for the functions and event listeners present in the JavaScript file:

1. **dropZone**
   - Type: `HTMLElement`
   - Description: The HTML element representing the drop zone for dragging and dropping CSV files.


2. **handleDragOver(event)**
   - Parameters: `event` (DragEvent)
   - Description: This function is called when a file is dragged over the drop zone. It adds a visual cue to indicate that the drop zone is active.

3. **handleDragLeave(event)**
   - Parameters: `event` (DragEvent)
   - Description: This function is called when a dragged file leaves the drop zone. It removes the visual cue that indicates the drop zone is active.

4. **loadFile(e)**
   - Parameters: `e` (Event)
   - Description: This function is responsible for loading the CSV file's content when it is either dropped into the drop zone or selected using the file input field. It reads the file content, validates if it is a CSV file, and then generates an HTML table to display the data.

5. **createTable(rows)**
   - Parameters: `rows` (Array of Strings)
   - Description: This function takes an array of CSV rows and creates an HTML table from the data. It also extracts the header row and formats it separately for the table's header.

6. **getFileNameFromResponseURL(responseURL)**
   - Parameters: `responseURL` (String)
   - Description: This function extracts the filename from a given URL (responseURL). It is used to determine the name of the loaded CSV file for display purposes.

7. **$(document).ready()**
   - Description: This is a jQuery event that triggers when the DOM is ready. It loads the default CSV file on page load by making an AJAX request to retrieve the file's content and then displaying it as an HTML table.

8. **Event Listeners:**
   - `dropZone.addEventListener("dragover", handleDragOver, false);`: Adds the `handleDragOver` function as an event listener to the drop zone when a file is dragged over it.
   - `dropZone.addEventListener("dragleave", handleDragLeave, false);`: Adds the `handleDragLeave` function as an event listener when a dragged file leaves the drop zone.
   - `dropZone.addEventListener("drop", loadFile, false);`: Adds the `loadFile` function as an event listener to handle dropping a file into the drop zone.
   - `$("#csvFileInput").on("change", function (e) { loadFile(e); });`: Adds an event listener to the file input element to handle file selection using the file input field.

9. **Searching:**
   - Description: This part of the code handles searching functionality. When the user enters text in the search input field with the ID "searchInput," it filters the table rows based on the entered text, and only the matching rows are displayed. If no results match the search criteria, a message "No results" is shown.

- **assets/css/style.css**

    1. **Global Styles:**
        - `body`: Sets the font family for the entire page content to "Open Sans" and sans-serif as a fallback.
        - `.container`: Limits the maximum width of the content container to 960 pixels.
        - `.mt-5`, `.mt-3`, `.mb-4`, `.mb-7`: Defines margins for spacing elements.

    2. **CSV Drop Zone Styles:**
        - `#fileDropContainer`: Aligns the drop zone content to the center within its container.
        - `.drop-zone`: Creates a dashed border and adds padding to the drop zone for better visual appearance.
        - `.drop-zone .icon`, `.drop-zone .text`: Styles the icon and text inside the drop zone.

    3. **Table Styles:**
        - `.table_head`: Positions the title and search input elements side by side with space between them.
        - `#csvTable`: Enables horizontal scrolling for the table when it exceeds the container width.
        - `.table`: Sets the table width to 100% and collapses the borders between table cells.
        - `.table th, .table td`: Adds padding and border styles to table header and data cells.
        - `.table th`: Applies a light background color to table header cells and aligns text to the left.
        - `.table tbody tr:nth-child(even)`: Alternates background color for even rows in the table.

    4. **Search Input Styles:**
        - `#searchInput`: Adds padding, border, and rounded corners to the search input field.

    5. **Responsive Styles:**
        - `@media (max-width: 768px)`: Adjusts the container padding for better display on smaller screens.

    These CSS styles are designed to provide a clean and user-friendly layout for the CSV viewer web application. The styles handle responsiveness, table formatting, drop zone appearance, and other visual aspects of the application. When used in conjunction with the HTML and JavaScript files, they create a complete and functional CSV viewer application.


## Extra Functionality
The purpose of this is to load student data from a JSON API, create an HTML table, and display the data on a web page. 

1. `createJsonTable(data)`: 
   - This function takes an array of student data as input (`data`).
   - It dynamically creates an HTML table to display the student information.
   - The table is styled using Bootstrap classes (`table`, `table-bordered`, `mt-3`, `table-hover`, and `table-custom`) to enhance the visual appearance.
   - The table's header row is created and styled with a light background (`thead-light`).
   - The table headers ("Student ID", "First Name", "Last Name", "Title", "Email", and "Subject IDs") are generated and added to the header row.
   - The function then iterates over each student in the `data` array and creates a new table row (`<tr>`) for each student.
   - Inside each row, it populates the table cells (`<td>`) with the respective student properties, such as student ID, first name, last name, title, email, and subject IDs (joining them with commas).

2. `initJson()`:
   - This function is responsible for initializing the process of loading data and creating the table.
   - It uses the `fetch()` method to make a network request to the URL specified in `dataURL`.
   - The URL (`https://studentapiuoltest.azurewebsites.net/api/studentinfo`) points to a JSON API that should provide an array of student information in JSON format.
   - The `await` keyword is used to make sure the fetch operation completes before proceeding.
   - If the fetch is successful, the response is converted to JSON using the `response.json()` method, and the resulting data is passed to the `createJsonTable(data)` function to build and display the table.
   - If there is an error in fetching the data or parsing the JSON, an error message is logged to the console.

The combined functionality of these two functions allows the application to load student data from a remote JSON API, construct an HTML table, and present the student information in an organized and readable format on the web page.
