import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../data.json';
import BackButton from '../components/BackButton';
import CommentSection from '../components/CommentSection';

import '../App.css'; // Import the CSS file with the styles

function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Find the ticket in the JSON data with matching id
    const foundTicket = jsonData.find((item) => item.id === Number(id));

    if (foundTicket) {
      setTicket(foundTicket);
    } else {
      // Handle case when ticket is not found
      console.error(`Ticket with id ${id} not found`);
    }
  }, [id]);

  if (!ticket) {
    return (
      <div className="ticket-details">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
      <>
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: {ticket.id}
          <span className={`status status-${ticket.name}`}>
            {ticket.name}
          </span>
        </h2>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
    <div className='CommentSection'>
    <CommentSection ticketId={ticket.id} />
    </div>
      </>
  );
}

export default TicketDetails;




