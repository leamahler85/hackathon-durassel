import { Button, Card } from 'react-bootstrap';
import React, { useRef, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import useDraggable from '../../hooks/useDraggable';

import { deletePostIt } from '../../api/api';


export default function PostImg(props) {
  const cardRef = useRef(null);
   const { refreshUser } = useContext(UserContext);
  useDraggable(cardRef);

  const handleDelete = (id) => {
    deletePostIt(id);
    refreshUser();
    console.log(id);
  };
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
            props.post_it_header ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD2cpLq8vMuVFW8dnth18kLS0lwMX6jQZzA&usqp=CAU'
          }
        />
        <Card.Body>
          <Card.Text className='text-dark d-flex justify-content-between mz-5'>
            {props.text || 'Quick Description'}
            <Button
              className='r-4 w-25 h-25'
              onClick={() => handleDelete(props.id)}
            >
              X
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
