import { Button, Card } from "react-bootstrap";
import React, { useRef, useContext } from "react";
import UserContext from '../../contexts/UserContext';
import useDraggable from "../../hooks/useDraggable";

export default function PostIt(props) {
  const postRef = useRef(null);
  const {  handleRemove } = useContext(UserContext);
  useDraggable(postRef);
  return (
    <>
      <Card
        style={{ width: '180px', height: 'auto' }}
        className='bg-warning m-1'
        ref={postRef}
      >
        <Card.Header
          as='h5'
          className='text-dark d-flex justify-content-between px-2'
        >
          {props.header}
          <Button
            className='ml-2 w-25 h-25'
            onClick={() => handleRemove(props.id)}
          >
            X
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Text className='text-dark'>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}