import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get('http://localhost:5000/categories');
    setCategories(response.data);
  };

  const addCategory = async (name) => {
    const response = await axios.post('http://localhost:5000/categories', { name });
    setCategories([...categories, response.data]);
  };

  const updateCategory = async (id, name) => {
    const response = await axios.put(`http://localhost:5000/categories/${id}`, { name });
    setCategories(categories.map(cat => (cat.id === id ? response.data : cat)));
  };

  const deleteCategory = async (id) => {
    await axios.delete(`http://localhost:5000/categories/${id}`);
    fetchCategories();
  };

  return (
    <div>
      <h1>Category Management</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => deleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addCategory('New Category')}>Add Category</button>
    </div>
  );
};

export default Category;
