import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CreateNote.css";
import Axios from "axios";
const CreateNote: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  function changeTitle(event: any) {
    setNoteTitle(event.target.value);
  }

  function changeBody(event: any) {
    setNoteBody(event.target.value);
  }

  function saveNewNote() {
    Axios.post("http://localhost:8000/api/notes/", {
      title: noteTitle,
      body: noteBody,
      user: localStorage.getItem('username')
    })
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });

    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <textarea
          className="create-title"
          placeholder="Title"
          onChange={changeTitle}
          rows={1}
        ></textarea>
        <textarea
          className="create-body"
          placeholder="Body"
          onChange={changeBody}
          rows={10}
        ></textarea>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNewNote}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateNote;
