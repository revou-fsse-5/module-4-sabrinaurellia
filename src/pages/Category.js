import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  categoryName: Yup.string().required('Category Name is required'),
});

const Category = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await axios.get('/api/categories');
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    await axios.post('/api/categories', data);
    fetchCategories();
    reset();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/categories/${id}`);
    fetchCategories();
  };

  return (
    <div>
      <h1>Category Management</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="categoryName"
          ref={register}
          placeholder="Category Name"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <p className="text-red-600">{errors.categoryName?.message}</p>
        <button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-600 rounded">
          Add Category
        </button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button
              onClick={() => handleDelete(category.id)}
              className="px-4 py-2 ml-4 text-white bg-red-600 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
