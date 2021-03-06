import React, { useState } from "react";
import "./index.css";

function NotesApp() {
  const [allNotes, setAllNotes] = useState([
    { noteTitle: "sdfjksdh", noteStatus: "sdkjfhk" },
    { noteTitle: "sdfjksdh", noteStatus: "sdkjfhk" }
  ]);
  const [message, setMessage] = useState("All");

  let getCurrrentNotes = () => {
    console.log("Messagh", message);
    let x = [];

    allNotes.forEach((n) => {
      console.log(n.noteTitle);
      if (message === "All")
        x = (
          <tr>
            <td>{n.noteTitle}</td>
            <td>{n.noteStatus}</td>
          </tr>
        );
      else if (message === "Completed") {
        if (n.noteStatus === "Completed") {
          x = (
            <tr>
              <td>{n.noteTitle}</td>
              <td>{n.noteStatus}</td>
            </tr>
          );
        }
      } else if (message === "Active") {
        if (n.noteStatus === "Active") {
          x = (
            <tr>
              <td>{n.noteTitle}</td>
              <td>{n.noteStatus}</td>
            </tr>
          );
        }
      }
    });

    console.log("dsflkjf", x);
    return x;
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input data-testid="input-note-name" type="text" className="large mx-8" placeholder="Note Title" />
        <input data-testid="input-note-status" type="text" className="large mx-8" placeholder="Note Status" />
        <button className="" data-testid="submit-button">
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={() => {
              console.log("sdfkljh");
            }}>
            All
          </li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={() => {}}>
            Active
          </li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={() => {}}>
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
          <tbody data-testid="noteList">{getCurrrentNotes()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
