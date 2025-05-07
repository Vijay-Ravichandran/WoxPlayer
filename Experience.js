import React, { useState } from 'react';
import '../Experience.css'; // Optional: for custom styles

const Experience = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    logo: null,
    userCount: '',
    videoCount: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Experience Submitted:', formData);
    alert('Experience Submitted Successfully!');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Experience Entry</h2>

      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Logo</label>
      <input
        type="file"
        name="logo"
        accept="image/*"
        onChange={handleChange}
        required
      />

      <label>User Count</label>
      <input
        type="number"
        name="userCount"
        value={formData.userCount}
        onChange={handleChange}
        required
      />

      <label>Video Count</label>
      <input
        type="number"
        name="videoCount"
        value={formData.videoCount}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Experience;
