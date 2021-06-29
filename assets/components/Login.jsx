import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserContext from '../contexts/UserContext';
import { postLogin } from '../api/api';
import { Container } from 'react-bootstrap';

const Login = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      setUser(await postLogin(values));
      history.push('/board')
    } catch (err) {
      alert('Identifiants incorrects')
    }
  };

  return (
      <Container style={{width:'50%', marginTop:'30vh'}}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              {...register('username')}
            />
            {errors.username && <p>{errors.username.message}</p>}
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register('password')}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
  );
};

export default Login;
