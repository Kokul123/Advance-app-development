import Navigation from './navigationBar'; 
import LeftSidebar from './leftsidebar';
import "../css/home.css";
const Home = () => {
  return (
    <div>
      <Navigation/>
      <LeftSidebar/>
      <div className='content-container'>
        <h1>Welcome to HarborHaven!</h1>
        <p>Book your dream boathouses:)</p>
        <hr/>
      </div>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default Home;
