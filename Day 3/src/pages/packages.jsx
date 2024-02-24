import "../css/package.css";

const SpecialPackagesPage = () => {
  const specialPackages = [
    { id: 1, name: 'Package 1', description: 'Enjoy a day on the water with our Sailboat package!', price: '$200', includes: ['4-hour sailboat rental', 'Captain included'], image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708755298/img7_nusguj.jpg', link: 'package1-details' },
    { id: 2, name: 'Package 2', description: 'Experience speed and thrill with our Speedboat package!', price: '$300', includes: ['3-hour speedboat rental', 'Safety equipment included'], image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708755298/img8_ayw8na.jpg', link: 'package2-details' },
    { id: 3, name: 'Package 3', description: 'Luxuriate in style with our Yacht package!', price: '$600', includes: ['6-hour yacht rental', 'Professional crew included'], image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708755297/img6_vgyoxh.png', link: 'package3-details' },
    // Add more packages as needed
  ];

  return (
    <div>
      <h1>Special Packages</h1>
      <div className="packages-container">
        {specialPackages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.name} />
            <div className="package-details">
              <h2>{pkg.name}</h2>
              <p>{pkg.description}</p>
              <p><strong>Price:</strong> {pkg.price}</p>
              <p><strong>Includes:</strong></p>
              <ul>
                {pkg.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a href={pkg.link} className="button">More Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialPackagesPage;
