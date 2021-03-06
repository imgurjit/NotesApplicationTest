import React, { useState } from "react";
import "./index.css";

function NotesApp() {
  const [allNotes, setAllNotes] = useState([
    { noteTitle: "This is a completed note", noteStatus: "Completed" },
    { noteTitle: "This is a active note", noteStatus: "Active" }
  ]);
  const [message, setMessage] = useState("All");
  const [currentNoteTitle, setCurrentNoteTitle] = useState("");
  const [currentNoteStatus, setCurrentNoteStatus] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  let getCurrrentNotes = () => {
    let z = [];
    if (message === "All") {
      z = allNotes.map((n, i) => {
        return (
          <tr key={i}>
            <td>{n.noteTitle}</td>
            <td>{n.noteStatus}</td>
          </tr>
        );
      });
    } else {
      z = allNotes
        .filter((n) => {
          return n.noteStatus === message;
        })
        .map((n) => {
          return (
            <tr>
              <td>{n.noteTitle}</td>
              <td>{n.noteStatus}</td>
            </tr>
          );
        });
    }
    return z;
  };

  let addNote = () => {
    if (currentNoteStatus === "Completed" || currentNoteStatus === "Active") {
      setAllNotes(allNotes.concat({ noteTitle: currentNoteTitle, noteStatus: currentNoteStatus }));
      setCurrentNoteStatus("");
      setCurrentNoteTitle("");
    } else {
      alert("Please valid information");
    }
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className="large mx-8"
          placeholder="Note Title"
          value={currentNoteTitle}
          onChange={(e) => {
            setCurrentNoteTitle(e.target.value);
          }}
        />
        <input
          data-testid="input-note-status"
          type="text"
          className="large mx-8"
          value={currentNoteStatus}
          placeholder="Note Status"
          onChange={(e) => {
            setCurrentNoteStatus(e.target.value);
          }}
        />
        <button
          className=""
          data-testid="submit-button"
          onClick={() => {
            addNote();
          }}>
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className={currentIndex === 0 ? "tab-item slide-up-fade-in activeTab" : "tab-item slide-up-fade-in "}
            data-testid="allButton"
            onClick={() => {
              setMessage("All");
              setCurrentIndex(0);
            }}>
            All
          </li>
          <li
            className={currentIndex === 1 ? "tab-item slide-up-fade-in activeTab" : "tab-item slide-up-fade-in "}
            data-testid="activeButton"
            onClick={() => {
              setMessage("Active");
              setCurrentIndex(1);
            }}>
            Active
          </li>
          <li
            className={currentIndex === 2 ? "tab-item slide-up-fade-in activeTab" : "tab-item slide-up-fade-in "}
            data-testid="completedButton"
            onClick={() => {
              setMessage("Completed");
              setCurrentIndex(2);
            }}>
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
