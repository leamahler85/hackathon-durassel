import { Button, Card } from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import React, { useRef, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import useDraggable from '../../hooks/useDraggable';

import { deletePostIt } from '../../api/api';

export default function PostImg(props) {
  const videoRef = useRef(null);
   const { refreshUser } = useContext(UserContext);
  useDraggable(videoRef);

  const handleDelete = (id) => {
    deletePostIt(id);
    refreshUser();
    console.log(id);
  };
  return (
    <>
      <Card
        style={{ width: '230px', height: 'auto' }}
        ref={videoRef}
        className='m-3'
      >
        <Player
          playsInline
          src={
            props.source || 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          }
        />
        <Card.Body>
          <Card.Text className='text-secondary d-flex justify-content-between mz-5'>
            {props.text || 'Some quick example.'}
            <Button
              className='ml-2 w-25 h-25'
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
