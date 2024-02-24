import { Link } from 'react-router-dom';
import '../css/leftsidebar.css'; 

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
        <br />
        <h2> CATEGORY </h2>
        <br/>
        <p className='ele'><Link to="/available">Boats Available</Link></p>
        <br></br>
        <p className='ele'><Link to="/ann">Rent</Link></p>
        <br></br>
        <p className='ele'><Link to="/packages">Packages</Link></p>
        <br></br>
        <p className='ele'><Link to="/feedback">Feedback</Link></p>

    </div>
  );
};

export default LeftSidebar;
  