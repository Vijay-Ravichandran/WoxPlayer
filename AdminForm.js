import React, { useState } from 'react';
import '../index.css'; // Make sure this is imported

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    experience: '',
    users: '',
    videos: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form Submitted Successfully!');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Admin Form</h2>

      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>No. of Experience</label>
      <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />

      <label>No. of Users</label>
      <input type="number" name="users" value={formData.users} onChange={handleChange} required />

      <label>No. of Videos</label>
      <input type="number" name="videos" value={formData.videos} onChange={handleChange} required />

      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminForm;
