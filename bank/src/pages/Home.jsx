import React from 'react';
import '../App.css';
import bankingImage from './bankingimg.jpg'; // Import the image

function Home(props) {
    return (
        <div>
        <div className='homebig'>
            <h1>Basic Banking System</h1>
            <img src={bankingImage} alt='bank' className='himage' /> {/* Use the imported image */}
        </div>
            <div className='description'>
             <h4>Description</h4>
             <p>This Website is created for completion of task given by <b>GRIP @The Sparks Foundation</b> overall this project has helped me in learning some new concepts and also getting better with the ones I was comfortable with also I want to thank them for giving me this opportunity</p>   
            </div>
            </div>
    );
}

export default Home;
