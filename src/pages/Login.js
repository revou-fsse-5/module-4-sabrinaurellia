import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
        ref={register({ required: 'Username is required' })}
        placeholder="Username"
      />
      <p>{errors.username?.message}</p>

      <input
        type="password"
        name="password"
        ref={register({ required: 'Password is required' })}
        placeholder="Password"
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
