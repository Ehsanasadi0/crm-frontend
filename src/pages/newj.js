import React, { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import helpdeskTickets from '../data.json';
import AppLayout from '../components/layout/AppLayout';

function Testjs() {
  
  const [formData, setFormData] = useState({id:helpdeskTickets[helpdeskTickets.length-1].id+1,name: '', email: '', product: '', description: '' });
  const resetForm = () =>{ 
    setFormData(
      {id:helpdeskTickets[helpdeskTickets.length-1].id+2,name: '', email: '', product: '', description: '' }
      // Reset other form fields to their default values...
    );
  };
 const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
 };

 const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/data', formData);
      alert('Data saved successfully');
      resetForm();
    } catch (err) {
      console.error(err);
      alert('Error saving data');
    }
 };

 return (
  
  <>
  <BackButton url='/' />
  <section className='heading'>
    <h1>ایجاد تیکت</h1>
    <p>لطفل فرم زیر را پر کنید</p>
  </section>

  <section className='form'>

    <form onSubmit={handleSubmit}>
    <div className='form-group'>
      <label htmlFor='id'>شماره درخواست </label>
      <input type='text' name="id" className='form-control' value={formData.id} disabled  />
    </div>
    <div className='form-group'>
      <label htmlFor='name'>نام شرکت</label>
      <input type='text' name="name" className='form-control' value={formData.name} onChange={handleChange}  />
    </div>
    <div className='form-group'>
      <label htmlFor='email'>ایمیل شرکت</label>
      <input type="email" name="email" className='form-control' value={formData.email} onChange={handleChange} />
    </div>
      <div className='form-group'>
        <label htmlFor='product'>مشکل</label>
        <input type="text" name="product" className='form-control' value={formData.product} onChange={handleChange} />

      </div>
      <div className='form-group'>
        <label htmlFor='description'>شرح مشکل</label>
        <textarea
          name='description'
          id='description'
          className='form-control'
          placeholder='Description'
          value={formData.description} 
          onChange={handleChange} 
        ></textarea>
      </div>
      <div className='form-group'>
        <button className='btn btn-block'>ارسال تیکت</button>
      </div>
    </form>
  </section>

</>
 );
}

export default Testjs;