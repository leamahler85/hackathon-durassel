import React from "react";
import postit from '../../img/post-it.svg';
import { Form, Button, Modal, Nav } from "react-bootstrap";

function MyCreatePostItForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-3"
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Post it header: </Form.Label>
          <Form.Control type="text" placeholder="Post it topic" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={props.onHide}>
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
        <img className="w-100" src={postit} alt="postit" onClick={() => setModalShow(true)}/>
      </Nav.Link>

      <MyCreatePostItForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}