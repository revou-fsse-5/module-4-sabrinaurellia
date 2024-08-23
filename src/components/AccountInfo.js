import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
    .required('Password is required'),
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
      <input
        name="username"
        ref={register}
        placeholder="Username"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <p className="text-red-600">{errors.username?.message}</p>

      <input
        type="password"
        name="password"
        ref={register}
        placeholder="Password"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <p className="text-red-600">{errors.password?.message}</p>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 text-white bg-gray-600 rounded"
        >
          Previous
        </button>
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AccountInfo;
