function createJsonTable(data) {
    const tableContainer = document.getElementById("tableContainer");

    // Create table element and set Bootstrap classes
    const table = document.createElement("table");
    table.classList.add(
        "table",
        "table-bordered",
        "mt-3",
        "table-hover",
        "table-custom"
    );

    // Create table head and table row for headers
    const tableHead = document.createElement("thead");
    tableHead.classList.add("thead-light");
    const headerRow = document.createElement("tr");

    // Headers for the table
    const headers = [
        "Student ID",
        "First Name",
        "Last Name",
        "Title",
        "Email",
        "Subject IDs",
    ];
    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    // Create table body and populate with data
    const tableBody = document.createElement("tbody");
    data.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${student.studentId}</td>
        <td>${student.firstName}</td>
        <td>${student.secondName}</td>
        <td>${student.title}</td>
        <td>${student.email}</td>
        <td>${student.subjectIds.join(", ")}</td>
      `;
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    tableContainer.appendChild(table);
}
async function initJson() {
    const dataURL =
        "https://studentapiuoltest.azurewebsites.net/api/studentinfo";
    await fetch(dataURL)
        .then((response) => response.json())
        .then((data) => createJsonTable(data))
        .catch((error) => console.error("Error fetching data:", error));
}
