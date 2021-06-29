import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import link from "../../img/link.svg";
import { Form, Button, Modal, Nav } from "react-bootstrap";

function MyCreateLinkForm(props) {
  const {postTitle, postText, handleChangeTitle, handleChangeText, handleSubmitLink } = useContext(UserContext);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='p-3'
    >
      <Form onSubmit={handleSubmitLink} className='p-4'>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Link</Form.Label>
          <Form.Control
            type='text'
            placeholder='add the url here'
            value={postTitle}
            onChange={handleChangeTitle}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Link text</Form.Label>
          <Form.Control
            type='text'
            placeholder='add the link message here'
            value={postText}
            onChange={handleChangeText}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={props.onHide}>
          Add One link to the board !
        </Button>
      </Form>
    </Modal>
  );
}

export default function CreateLink() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Nav.Link
        eventKey="link-2"
        className="mt-5 mb-5"
        onClick={() => setModalShow(true)}
      >
        <img className="w-100" src={link} alt="link" />
      </Nav.Link>
      <MyCreateLinkForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
