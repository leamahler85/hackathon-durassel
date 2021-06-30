import { Button, Card } from "react-bootstrap";
import React, { useRef, useContext } from "react";
import UserContext from '../../contexts/UserContext';
import useDraggable from "../../hooks/useDraggable";

import {  deletePostIt } from '../../api/api';

export default function PostIt(props) {
  const postRef = useRef(null);
  const { refreshUser } = useContext(UserContext);
  useDraggable(postRef);

const handleDelete = (id) => {
deletePostIt(id)
refreshUser()
console.log(id)

};

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
          {props.post_it_header}
          <Button
            className='ml-2 w-25 h-25'
            onClick={() => handleDelete(props.id)}
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