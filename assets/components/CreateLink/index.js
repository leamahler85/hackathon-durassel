import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import link from '../../img/link.svg';
import { Form, Button, Modal, Nav } from 'react-bootstrap';

import { postPostIt } from '../../api/api';

function MyCreateLinkForm(props) {
  const { refreshUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    header: '',
    text: '',
    type: 'link',
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
          <Form.Label>Link</Form.Label>
          <Form.Control
            type='text'
            placeholder='add the url here'
            value={formData.header}
            name='header'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Link text</Form.Label>
          <Form.Control
            type='text'
            placeholder='add the link message here'
            value={formData.text}
            name='text'
            onChange={handleChange}
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
        eventKey='link-2'
        className='mt-5 mb-5'
        onClick={() => setModalShow(true)}
      >
        <img className='w-100' src={link} alt='link' />
      </Nav.Link>
      <MyCreateLinkForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
