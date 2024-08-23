import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, 'Zip Code must be exactly 5 digits')
    .required('Zip Code is required'),
});

const AddressInfo = ({ onNext, onPrev }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="streetAddress"
        ref={register}
        placeholder="Street Address"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <p className="text-red-600">{errors.streetAddress?.message}</p>

      <input
        name="city"
        ref={register}
        placeholder="City"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <p className="text-red-600">{errors.city?.message}</p>

      <input
        name="state"
        ref={register}
        placeholder="State"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <p className="text-red-600">{errors.state?.message}</p>

      <input
        name="zipCode"
        ref={register}
        placeholder="Zip Code"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <p className="text-red-600">{errors.zipCode?.message}</p>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 text-white bg-gray-600 rounded"
        >
          Previous
        </button>
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default AddressInfo;
