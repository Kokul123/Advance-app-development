import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Formdetail = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    id: '200',
    noOfPersons: '',
    fromDate: '',
    toDate: '',
    totalPrice: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const totalPrice = name === 'noOfPersons' ? parseInt(value, 10) * 2600 : booking.totalPrice;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
      totalPrice: totalPrice.toString(),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/book/post',
        booking,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Slot Booked successfully');
      navigate('/user');
      console.log('Booking response:', response.data);
    } catch (error) {
      console.error('Error posting booking:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f3f3',
      }}
    >
      <div
        style={{
          width: '80%',
          maxWidth: '600px',
          padding: '20px',
          borderRadius: '10px',
          background: 'rgba(255, 254, 254, 0.763)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="noOfPersons">Number of Persons:</label>
            <input
              type="number"
              id="noOfPersons"
              name="noOfPersons"
              value={booking.noOfPersons}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="fromDate">From Date:</label>
            <input
              type="date"
              id="fromDate"
              name="fromDate"
              value={booking.fromDate}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="toDate">To Date:</label>
            <input
              type="date"
              id="toDate"
              name="toDate"
              value={booking.toDate}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="number"
              id="totalPrice"
              name="totalPrice"
              value={booking.noOfPersons ? booking.noOfPersons * 2600 : ''}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formdetail;
