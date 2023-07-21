import React, { useState } from "react";
import "./CSVViewer.css";
const CSVViewer = () => {
    const [csvData, setCSVData] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [documentTitle, setDocumentTitle] = useState('');
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const contents = e.target.result;
            setCSVData(contents);
        };

        reader.readAsText(file);
        
        const fileName = file.name;
        setDocumentTitle(fileName);    
    };
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container">
            <h1 className="my-4">CSV Viewer</h1>

            <div className="mb-3">
                <label htmlFor="csvInput" className="form-label">
                    Choose a CSV File:
                </label>
                <input
                    type="file"
                    id="csvInput"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="form-control"
                />
            </div>

            {csvData && (
                <div className="mb-3">
                    <h1 className="my-4">{documentTitle || 'CSV Viewer'}</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                        className="form-control mb-4"
                    />

                    <table className="table mt-4">
                        <thead>
                            <tr>
                                {csvData
                                    .split("\n")[0]
                                    .split(",")
                                    .map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData
                                .split("\n")
                                .slice(1)
                                .filter((row) =>
                                    row
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                )
                                .map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row
                                            .split(",")
                                            .map((cell, cellIndex) => (
                                                <td key={cellIndex}>{cell}</td>
                                            ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                </div>
            )}
        </div>
    );
};

export default CSVViewer;
