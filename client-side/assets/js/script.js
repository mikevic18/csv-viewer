
const dropZone = document.getElementById("csvFileDropZone");

// Add event listeners for drag and drop events
function toggleView() {
    const csvContainer = document.getElementById("csvContainer");
    const jsonTable = document.getElementById("jsonTable");
    const fileDropContainer = document.getElementById("csvFileDropZone");
  
    if (csvContainer.style.display === "none") {
      // Show CSV viewer
      csvContainer.style.display = "block";
      fileDropContainer.style.display = "block";
      jsonTable.style.display = "none";
    } else {
      // Show JSON data
      csvContainer.style.display = "none";
      fileDropContainer.style.display = "none";
      jsonTable.style.display = "block";
    }
  }

function handleDragOver(event) {
  event.preventDefault();
  dropZone.classList.add("active");
}

function handleDragLeave(event) {
  event.preventDefault();
  dropZone.classList.remove("active");
}
function loadFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            if (file.type !== "text/csv") throw new Error("File is not a CSV");
            const contents = e.target.result;
            const rows = contents.split("\n");
            const table = createTable(rows);
            const fileName = file.name.split(".")[0];
            $("#fileTitle").text(fileName);
            $("#csvTable").html(table);
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "An error occurred while processing the file, please try again!",
                icon: "error",
            });
            console.error(
                "An error occurred while processing the file:",
                error
            );
        }
    };

    reader.onerror = function (e) {
        console.error(
            "An error occurred while reading the file:",
            e.target.error
        );
        Swal.fire({
            title: "Error",
            text: "An error occurred while processing the file, please try again!",
            icon: "error",
        });
    };

    reader.readAsText(file);
}

function createTable(rows) {
    let table = '<table class="table table-bordered table-hover table-custom">';
    table += '<thead data-type="header" class="thead-light"><tr>';
    const headers = rows[0].split(",");
    for (const header of headers) table += `<th scope="col">${header}</th>`;
    table += "</tr></thead><tbody>";
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(",");
        table += "<tr>";
        for (const cell of cells) table += `<td>${cell}</td>`;
        table += "</tr>";
    }
    table += "</tbody></table>";
    return table;
}
function getFileNameFromResponseURL(responseURL) {
    var urlParts = responseURL.split("/");
    return urlParts[urlParts.length - 1];
  }

$(document).ready(function () {
    // Load file on page load
    try {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "./assets/content/students-and-subjects.csv", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const csvData = xhr.responseText;
                const rows = csvData.split("\n");
                const table = createTable(rows);
                const fileName = getFileNameFromResponseURL(xhr.responseURL);;
                $("#fileTitle").text(fileName);
                $("#csvTable").html(table);
            }
        };
        xhr.send();
    } catch (error) {
        swal({
            title: "Error",
            text: "Failed to load CSV file: " + error.message,
            icon: "Error",
        });
    }
    // Event listener for file input change

    dropZone.addEventListener("dragover", handleDragOver, false);
    dropZone.addEventListener("dragleave", handleDragLeave, false);
    dropZone.addEventListener("drop", loadFile, false);
    $("#csvFileInput").on("change", function (e) {
        loadFile(e);
    });
    initJson();
});

$("#searchInput").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    const rows = $("#csvTable tbody tr").filter(function () {
        const isHeader =
            $(this).find("td, th").first().data("type") === "header";
        return !isHeader && $(this).text().toLowerCase().indexOf(value) > -1;
    });
    $("#csvTable tbody tr").hide();
    rows.show();
    if (rows.length === 0) {
        $("#csvTable tbody").append(
            '<tr id="no-results"><td colspan="100%">No results</td></tr>'
        );
    } else {
        $("#csvTable tbody #no-results").remove();
    }
});
