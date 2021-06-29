import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import video from "../../img/video.svg";
import { Form, Button, Modal, Nav } from "react-bootstrap";

function MyCreateVideoForm(props) {
  const {postTitle, postText, handleChangeTitle, handleChangeText, handleSubmitVideo } = useContext(UserContext);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='p-3'
    >
      <Form onSubmit={handleSubmitVideo} className='p-4'>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Video source</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={postTitle}
            onChange={handleChangeTitle}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Video description:</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={postText}
            onChange={handleChangeText}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={props.onHide}>
          Add one video to the board !
        </Button>
      </Form>
    </Modal>
  );
}

export default function CreatePostVideo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Nav.Link eventKey="link-2" className="mt-5">
        <img className="w-100" src={video} alt="video" onClick={() => setModalShow(true)}/>
      </Nav.Link>
      <MyCreateVideoForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
