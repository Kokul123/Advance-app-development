import "../css/feedback.css";
import  { useState } from 'react';
import { Link } from 'react-router-dom';


function Feedback(){
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [comment, setComment] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone', phone);
    console.log('Comment:', comment);
  };

  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='Feedback-container'>
        <h2 className='title'>Give Your Feedback!</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            placeholder="User Id"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Issues"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group-comment">
          <input
            type="text"
            id="comment"
            placeholder="Give us review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='but'>
          <Link to="/">Submit</Link>
          </button>
      </form>
      </div>
    </div>
  );
}

export default Feedback;
