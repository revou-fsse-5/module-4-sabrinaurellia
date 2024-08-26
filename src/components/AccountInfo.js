import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

const AccountInfo = ({ onNext, onPrev }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register} placeholder="Username" className="input-field" />
      <p>{errors.username?.message}</p>

      <input type="password" name="password" ref={register} placeholder="Password" className="input-field" />
      <p>{errors.password?.message}</p>

      <button type="button" onClick={onPrev} className="btn">Back</button>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
};

export default AccountInfo;
