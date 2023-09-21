import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Th(props) {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('/transactions/alltransaction');
                const data = response.data.transactions;
                setTransactions(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
                setLoading(false);
            }
        };
        fetchTransactions();
    }, []);
 
    return (
        <div className='cbig'>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {transactions.map((transaction) => (
                        <div class="card" key={transaction.id}>
                            <div class="card-header">Featured</div>
                            <div class="card-body">
                                <h5 class="card-title">Sender: {transaction.fromName}</h5>
                                <h5>Receiver: {transaction.toName}</h5>
                                <p>amount: {transaction.amount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Th;
