import React from "react";
//import "./index.css";

function Notes() {
  return (
    <div className="layout-column align-items-center justify-content-start">
      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton">
            All
          </li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton">
            Active
          </li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton">
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Notes;
