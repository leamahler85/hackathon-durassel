import React from 'react';
import { Container } from "react-bootstrap";
import List from '../List';

export default function Board({list}) {
  return (
    <Container fluid-md className='d-flex justify-content-around align-items-center flex-wrap mt-3'>
      <List list={list}/>
    </Container>
  );
}
