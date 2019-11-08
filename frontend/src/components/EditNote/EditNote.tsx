import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
const EditNote = ({ id, title, body }: any) => {
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
    console.log(id);
    Axios.put(`http://localhost:8000/api/notes/${id}/`, {
      title: noteTitle,
      body: noteBody,
      user: localStorage.getItem("username")
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

  useEffect(() => {
    setNoteBody(body);
    setNoteTitle(title);
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <textarea
          className="create-title"
          onChange={changeTitle}
          rows={1}
          value={noteTitle}
        ></textarea>
        <textarea
          className="create-body"
          onChange={changeBody}
          rows={10}
          value={noteBody}
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

export default EditNote;
