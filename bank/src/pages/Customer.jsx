import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

function Customer(props) {
  const { userName } = useParams();

  const [amount, setAmount] = useState(0);
  const [toName, setToName] = useState('');
  const [transferStatus, setTransferStatus] = useState(null);

  // Fetch user data using the userName from the URL
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/users/all/user/${userName}`);
        const userData = response.data.user; 
        // user-related state based on userData
        setToName(userData.name);
        // set other user-related data here
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userName]);

  const handleTransfer = async () => {
    try {
      // Send a POST request to perform the money transfer
      const response = await axios.post('/transactions/transfer', {
        fromName: userName,
        toName: toName,
        amount: amount,
      });

      if (response.data.success) {
        // Money transfer successful
        setTransferStatus('Money transferred successfully');
        
      } else {
        // Money transfer failed
        showToast();
      }
    } catch (error) {
      console.error('Error performing money transfer:', error);
      setTransferStatus('An error occurred while processing the transfer.');
    }
  };

  const showToast = () => {
    toast.success('Money transferred successfully', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="cbig">
      <div className="card">
        <div className="card-header">Sparks Banking System</div>
        <div className="card-body">
          <h5 className="card-title">{userName}</h5>
          <button type="button" className="btn btn-outline-dark">
            Transaction history
          </button>
        </div>
      </div>
      <h4>Transfer Money</h4>
      <div className="card">
        <div className="card-header">Sparks Banking System</div>
        <div className="card-body">
          <h5 className="card-title">Recipient's Name:</h5>
          <input
            type="text"
            value={toName}
            onChange={(e) => setToName(e.target.value)} 
          />
          <h5 className="card-title">Amount:</h5>
          <div className="amountin">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <button type="button" className="btn btn-outline-dark" onClick={handleTransfer}>
            Transfer
          </button>
        </div>
      </div>
      {transferStatus && <p>{transferStatus}</p>}
      <Link to='/allcustomers'> <button type="button" className="btn btn-outline-dark">
            Back to customer list
          </button></Link>
    </div>
  );
}

export default Customer;
