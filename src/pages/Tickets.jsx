import React from 'react';
import BackButton from '../components/BackButton';
import {Link } from 'react-router-dom';
import helpdeskTickets from '../data.json';
import AppLayout from '../components/layout/AppLayout';
import '../pages/ticket.css';
function Tickets() {
  
  return (
    <>

      <BackButton url='/' />
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>id</div>
          <div>Date </div>
          <div>Product </div>
          <div>Status </div>
          <div>description </div>
          <div></div>
        </div>
      </div>

      {helpdeskTickets.map((data, index) => {
            return (
              <div className='ticket' key={index}>
                <div>{index}</div>
                <div>{data.name}</div>
                <div>{data.email}</div>
                <div>{data.product}</div>
                <div>{data.description}</div>
                <div><Link to={`/ticket/${data.id}`}>View</Link></div>
              </div>
            );
          })}
    </>
  );
}

export default Tickets;
