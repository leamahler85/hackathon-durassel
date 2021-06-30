import { Card, Container, Button } from 'react-bootstrap';
import React, { useRef, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import useDraggable from "../../hooks/useDraggable";

import { deletePostIt } from '../../api/api';


export default function PostImg(props) {
  const linkRef = useRef(null);
   const { refreshUser } = useContext(UserContext);
  useDraggable(linkRef);

  const handleDelete = (id) => {
    deletePostIt(id);
    refreshUser();
    console.log(id);
  };
  return (
    <>
      <Card
        style={{ width: 'auto', height: 'auto' }}
        ref={linkRef}
        className='m-3'
      >
        <Container className='p-2'>
          <Card.Text className='text-dark d-flex justify-content-around p-3 '>
            <a href={props.post_it_header || 'https://www.fiverr.com/'}>
              {props.text || 'Link to Fever ...'}
            </a>
            <Button className='ml-5' onClick={() => handleDelete(props.id)}>
              X
            </Button>
          </Card.Text>
        </Container>
      </Card>
    </>
  );
}
