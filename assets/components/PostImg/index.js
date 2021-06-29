import { Button, Card } from 'react-bootstrap';
import React, { useRef, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import useDraggable from '../../hooks/useDraggable';

export default function PostImg(props) {
  const cardRef = useRef(null);
   const { handleRemove } = useContext(UserContext);
  useDraggable(cardRef);
  return (
    <>
      <Card
        style={{ width: '180px', height: 'auto' }}
        ref={cardRef}
        className='m-3'
      >
        <Card.Img
          variant='top'
          src={
            props.img_source ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD2cpLq8vMuVFW8dnth18kLS0lwMX6jQZzA&usqp=CAU'
          }
        />
        <Card.Body>
          <Card.Text className='text-dark d-flex justify-content-between mz-5'>
            {props.text || 'Quick Description'}
            <Button
              className='r-4 w-25 h-25'
              onClick={() => handleRemove(props.id)}
            >
              X
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
