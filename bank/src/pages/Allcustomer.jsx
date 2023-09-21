import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Allcustomer(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users/all');
        const data = response.data.users; // Assuming 'users' is the array in your JSON response
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='cbig'>
    <h1>Customer List</h1>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <div>
        {users.map((user) => (
          <div className="card" key={user._id}>
            <div className="card-header">Sparks Banking System</div>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Current Balance: {user.currentbal}</p>
              {/* Add a link to the Customer component with the selected user's ID */}
              <Link to={`/allcustomers/customer/${user.name}`} className="btn btn-outline-dark">
                Perform Money Transfer
              </Link>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Allcustomer;