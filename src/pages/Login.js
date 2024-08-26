import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: {
          username: data.username,
          password: data.password,
        },
      });

      if (response.data.length > 0) {
        console.log('Login successful:', response.data);
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register({ required: true })} placeholder="Username" />
      {errors.username && <p>Username is required</p>}

      <input type="password" name="password" ref={register({ required: true })} placeholder="Password" />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
