import { Card, Container, Button } from 'react-bootstrap';
import React, { useRef, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import useDraggable from "../../hooks/useDraggable";

export default function PostImg(props) {
  const linkRef = useRef(null);
   const { handleRemove } = useContext(UserContext);
  useDraggable(linkRef);
  return (
    <>
      <Card
        style={{ width: 'auto', height: 'auto' }}
        ref={linkRef}
        className='m-3'
      >
        <Container className='p-2'>
          <Card.Text className='text-dark d-flex justify-content-around p-3 '>
            <a href={props.link || 'https://www.fiverr.com/'}>
              {props.text || 'Link to Fever ...'}
            </a>
            <Button
              className='ml-5'
              onClick={() => handleRemove(props.id)}
            >
              X
            </Button>
          </Card.Text>
        </Container>
      </Card>
    </>
  );
}
