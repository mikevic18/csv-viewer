## CSV Viewer Application Documentation

### `index.css`

The `index.css` file contains CSS styles that are applied to the CSV viewer application. It provides a visually appealing and responsive design to enhance the user experience. The following are the CSS classes defined in the file:

- `.container`: This class sets the styling for the main container of the CSV viewer. It restricts the maximum width of the container to 800 pixels, centers it horizontally using `margin: 0 auto`, adds padding of 20 pixels, and sets a light background color of `#f8f9fa`.

- `h1`: This class styles the heading elements (`<h1>`) within the CSV viewer. It sets the font size to 28 pixels, applies bold font weight, and adds a bottom margin of 20 pixels.

- `.form-control`: This class applies styling to form input elements. It adds a bottom margin of 10 pixels, giving some spacing between form inputs.

- `table`: This class styles the `<table>` element in the application. It sets the table width to 100%, collapses the table borders using `border-collapse: collapse`, and adds a top margin of 20 pixels to create some spacing between the table and other elements.

- `tbody tr:nth-child(even)`: This selector applies styling to even rows (`<tr>`) within the table body. It sets a background color of `#f2f2f2`, creating a zebra-striped effect for better readability.

- `tbody tr:hover`: This selector applies styling to table rows (`<tr>`) when the user hovers over them. It changes the background color to `#d9edff`, providing visual feedback to indicate interactivity.

- `th, td`: This selector styles the table header cells (`<th>`) and data cells (`<td>`) within the table. It sets padding of 8 pixels, aligns the content to the left, and adds a bottom border of 1 pixel with a light color (`#ddd`) to separate table rows.

- `tr:hover`: This selector applies styling to table rows (`<tr>`) when the user hovers over them. It changes the background color to `#f2f2f2`, providing visual feedback.

- `.mt-4`: This class adds a top margin of 16 pixels. It can be used to create spacing between elements.

- `.text-center`: This class centers the content of the elements it is applied to, using the `text-align` property.

- `.no-matches`: This class styles the text indicating no search matches. It sets the color to `#999` (gray) and applies italic font style, giving a visual hint that it's not regular content.

### `index.js`

The `index.js` file is the entry point of the CSV viewer application. It renders the `App` component into the DOM. Here's a brief explanation of the code:

- `import React from 'react'`: Imports the React library, allowing the use of JSX syntax and React components.

- `import ReactDOM from 'react-dom/client'`: Imports the ReactDOM object, specifically the `createRoot` method, which enables concurrent mode rendering.

- `import App from './App.jsx'`: Imports the main `App` component from the `App.jsx` file.

- `import './index.css'`: Imports the styles defined in the `index.css` file to be applied to the application.

- `import 'bootstrap/dist/css/bootstrap.css';`: Imports the Bootstrap CSS library, which provides styling for various components and layout utilities.

- `import '@fortawesome/fontawesome-free/css/all.css';`: Imports the Font Awesome CSS library, which provides font icons for various elements.

- `ReactDOM.createRoot(document.getElementById('root')).render(...)`: This line creates a concurrent mode root in the DOM using `createRoot` and renders the `App` component inside it. The application is wrapped inside `React.StrictMode`, which is a utility that helps identify potential problems in the application during development.



## CSV Viewer Component Documentation

The `CSVViewer` component is a React JSX component that allows users to view the contents of a CSV file and search for specific data within the file. The component utilizes the `useState` hook from React to manage state variables for storing the CSV data, search term, and the document title. It provides a user-friendly interface with file upload functionality and a search input box to filter the CSV data.

### Props

The `CSVViewer` component does not receive any props from its parent components.

### State Variables

1. `csvData`: This state variable is used to store the contents of the CSV file uploaded by the user. It is initialized as an empty string using `useState("")`.

2. `searchTerm`: This state variable is used to store the current search term entered by the user. It is initialized as an empty string using `useState("")`.

3. `documentTitle`: This state variable is used to store the title of the uploaded CSV document. If a file is uploaded, its name is used as the document title. Otherwise, it defaults to an empty string. It is initialized as an empty string using `useState('')`.

### Functions

1. `handleFileUpload`: This function is triggered when the user selects a CSV file using the file input. It reads the contents of the selected file using `FileReader` and updates the `csvData` state with the file contents. It also sets the `documentTitle` state with the name of the uploaded file.

2. `handleSearch`: This function is triggered when the user enters a search term in the search input box. It updates the `searchTerm` state with the entered value.

### JSX Elements

The JSX elements returned by the `CSVViewer` component represent the user interface for the CSV viewer.

1. The `div` element with `className="container"` wraps the entire CSV viewer component.

2. The `h1` element with `className="my-4"` displays the heading "CSV Viewer".

3. The `div` element with `className="mb-3"` contains the file input for uploading a CSV file. The user can select a CSV file using this input.

4. The `label` element within the above `div` provides a description for the file input.

5. The `input` element with `type="file"`, `id="csvInput"`, and `accept=".csv"` is used for selecting a CSV file. It triggers the `handleFileUpload` function when a file is selected.

6. The `{csvData && ...}` conditional rendering ensures that the following elements are displayed only when there is data available in the `csvData` state variable (i.e., when a file has been uploaded).

7. The `h1` element with `className="my-4"` displays the document title or "CSV Viewer" if no file has been uploaded.

8. The `input` element with `type="text"` and `className="form-control mb-4"` represents the search input box. It triggers the `handleSearch` function when the user enters a search term.

9. The `table` element with `className="table mt-4"` displays the CSV data in tabular format.

10. The `thead` element represents the table header row.

11. The `tr` element within the `thead` represents the table header row.

12. The `th` elements within the above `tr` represent the table header cells. These cells are created based on the headers extracted from the first row of the CSV data.

13. The `tbody` element represents the table body.

14. The `tr` elements within the `tbody` represent each row of the CSV data after filtering based on the search term.

15. The `td` elements within the above `tr` represent the individual cells of each row, showing the data from the CSV file.

### CSS Styling

The component relies on an external CSS file named `CSVViewer.css` to apply styling. The specific styling details are not provided in the JSX file, and you would need to refer to the CSS file to understand the visual appearance of the CSV viewer.

### Export

The `CSVViewer` component is exported as the default export of the module, making it available for use in other parts of the application.

