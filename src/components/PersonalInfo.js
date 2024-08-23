import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  dob: Yup.date().required('Date of Birth is required'),
});

const PersonalInfo = ({ onNext }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="fullName" ref={register} placeholder="Full Name" />
      <p>{errors.fullName?.message}</p>

      <input name="email" ref={register} placeholder="Email Address" />
      <p>{errors.email?.message}</p>

      <input type="date" name="dob" ref={register} />
      <p>{errors.dob?.message}</p>

      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfo;
