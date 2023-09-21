import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <footer>
        <p>&copy; 2023 Banking System</p>
        <div>
            <Link to="/">Home</Link>
            <Link to="/">Description</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </footer>
    );
}

export default Footer;