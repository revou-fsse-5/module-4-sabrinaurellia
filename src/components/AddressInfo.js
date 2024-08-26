import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  street: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip Code is required').matches(/^[0-9]{5}$/, 'Invalid Zip Code'),
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
      <input name="street" ref={register} placeholder="Street Address" className="input-field" />
      <p>{errors.street?.message}</p>

      <input name="city" ref={register} placeholder="City" className="input-field" />
      <p>{errors.city?.message}</p>

      <input name="state" ref={register} placeholder="State" className="input-field" />
      <p>{errors.state?.message}</p>

      <input name="zip" ref={register} placeholder="Zip Code" className="input-field" />
      <p>{errors.zip?.message}</p>

      <button type="button" onClick={onPrev} className="btn">Back</button>
      <button type="submit" className="btn">Next</button>
    </form>
  );
};

export default AddressInfo;
