import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div>
         <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-md">
    <Link className="navbar-brand" to='/'>Banking System</Link>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/transactions">Transaction History</Link>
        </li>
      </ul>
     <Link to='/allcustomers'><button type="button" class="btn btn-outline-secondary">View all Customers</button></Link>
  </div>
</nav>
         </nav>
        </div>
    );
}

export default Header;