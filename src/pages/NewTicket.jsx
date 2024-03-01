import React,{ useState } from 'react';
import BackButton from '../components/BackButton';
import Tickets from './Tickets';
import { useNavigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
 

function NewTicket() {
  const [formData, setFormData] = useState({ name: '', email: '', product: '', description: '' });
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  const history = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const { name, email, product,description } = formData;

    // Pass the form data to Tickets component as a prop
    // You can also navigate to Tickets component using React Router if needed
    history(`/tickets?name=${name}&email=${email}&product=${product}&description=${description}`);
    
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>

        <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' name="name" className='form-control' value={formData.name} onChange={handleChange}  />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type="email" name="email" className='form-control' value={formData.email} onChange={handleChange} />
        </div>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <input type="text" name="product" className='form-control' value={formData.product} onChange={handleChange} />

          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
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
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
