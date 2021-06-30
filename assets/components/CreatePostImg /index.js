import React, {useContext, useState} from "react";
import picture from '../../img/picture.svg';
import UserContext from "../../contexts/UserContext"; 
import { Form, Button, Modal, Nav } from "react-bootstrap";

import { postPostIt } from '../../api/api';

function MyCreatePictureForm(props) {
  const { refreshUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    header: '',
    text: '',
    type: 'image',
  });


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postPostIt(formData);
    refreshUser();
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='p-3'
    >
      <Form onSubmit={handleSubmit} className='p-4'>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Picture source</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            value={formData.header}
            name='header'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Picture description:</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={formData.text}
            name='text'
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={props.onHide}>
          Add One picture to the board !
        </Button>
      </Form>
    </Modal>
  );
}

export default function CreatePostImg() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
       <Nav.Link eventKey='link-1' className='mt-5 mb-5'>
          <img className='w-100' src={picture} alt='immages' onClick={() => setModalShow(true)}/>
        </Nav.Link>
      <MyCreatePictureForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
