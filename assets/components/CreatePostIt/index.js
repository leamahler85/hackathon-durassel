import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import postit from "../../img/post-it.svg";
import { Form, Button, Modal, Nav } from "react-bootstrap";

import { postPostIt } from '../../api/api';

function MyCreatePostItForm(props) {
  const { refreshUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    header: "",
    text: "",
    type: "PostIt"
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postPostIt(formData);
    refreshUser();
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Form onSubmit={handleSubmit} className='p-4'>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Post it header: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Post it topic'
            value={formData.header}
            name='header'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={formData.text}
            name='text'
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={props.onHide}>
          Add One postIt !
        </Button>
      </Form>
    </Modal>
  );
}

export default function CreatePostIt() {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Nav.Link className="mb-5">
        <img
          className="w-100"
          src={postit}
          alt="postit"
          onClick={() => setModalShow(true)}
        />
      </Nav.Link>

      <MyCreatePostItForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
