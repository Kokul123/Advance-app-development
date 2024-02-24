import "../css/available.css";

const AvailableBoatsPage = () => {
  const availableBoats = [
    { id: 1, name: 'Boat 1', type: 'Sailboat', capacity: 4, price: '$100/hour', image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708679237/ayyappan-mk-W-WrBPKYCZM-unsplash_yxkppw.jpg', location: 'Marina A', link: 'boat1-details' },
    { id: 2, name: 'Boat 2', type: 'Speedboat', capacity: 6, price: '$150/hour', image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708754532/img2_ojjj16.jpg', location: 'Marina B', link: 'boat2-details' },
    { id: 3, name: 'Boat 3', type: 'Yacht', capacity: 10, price: '$300/hour', image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708754527/img4_vy8rug.jpg', location: 'Marina C', link: 'boat3-details' },
    { id: 3, name: 'Boat 3', type: 'House', capacity: 10, price: '$300/hour', image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708754526/img1_qeas6v.png', location: 'Marina C', link: 'boat3-details' },
    { id: 3, name: 'Boat 3', type: 'Yacht', capacity: 10, price: '$300/hour', image: 'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1708754526/img3_voiwie.jpg', location: 'Marina C', link: 'boat3-details' },
  ];

  return (
    <div>
      <h1>Available Boats</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Location</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {availableBoats.map((boat) => (
            <tr key={boat.id}>
              <td>{boat.id}</td>
              <td>{boat.name}</td>
              <td>{boat.type}</td>
              <td>{boat.capacity}</td>
              <td>{boat.price}</td>
              <td>{boat.location}</td>
              <td><a href={boat.link}><img src={boat.image} alt={boat.name} style={{ width: '100px', height: 'auto' }} /></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableBoatsPage;
