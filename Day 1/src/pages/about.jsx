import Navigation from "./navigationBar";
import "/src/css/about.css";


const About = () => {
    return (
      <div>
        
        <Navigation/>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Boat House Booking</h1>
        <p>Welcome to Boat House Booking, your premier destination for seamless and unforgettable boating experiences.</p>
        <p>At Boat House Booking, we're passionate about connecting enthusiasts with the perfect boating accommodations, ensuring memorable stays along picturesque waterways.</p>
        <h2>Our Mission</h2>
        <p>Our mission is to provide boating enthusiasts with a diverse selection of meticulously curated boat houses, each promising a unique blend of comfort, convenience, and scenic vistas.</p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide Selection: We offer a diverse range of boat houses to suit every taste and budget.</li>
          <li>Exceptional Service: Our dedicated team provides personalized assistance to make your booking experience seamless and stress-free.</li>
          <li>Transparency and Reliability: Every listing meets our rigorous standards for quality and safety, ensuring peace of mind for our guests.</li>
          <li>Memorable Experiences: Whether you seek a tranquil retreat or an adventurous getaway, we're here to help you create unforgettable memories on the water.</li>
        </ul>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please don't hesitate to contact us:</p>
        <address>
          Email: HarborHaven@boathousebooking.com<br />
          Phone: 6785799600<br />
          Address: 123 Main Street, Mumbai, India
        </address>
      </div>
    </div>
        <footer>
          {/* Footer content goes here */}
        </footer>
      </div>
    );
  };
  
  export default About;