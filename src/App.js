import React, { useState } from "react";
import "./App.css";

function App() {
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [tableData, setTableData] = useState(data);

  const sortByDate = () => {
    const sorted = [...tableData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setTableData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...tableData].sort((a, b) => b.views - a.views);
    setTableData(sorted);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>

      <div className="buttons">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
