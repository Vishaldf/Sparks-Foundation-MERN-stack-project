
import './App.css';
import Home from './pages/Home';
import Allcustomer from './pages/Allcustomer';
import Customer from './pages/Customer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Th from './pages/Th';

function App() {
  return (
    
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allcustomers' element={<Allcustomer />}></Route>
        <Route path="/allcustomers/customer/:userName" element={<Customer />} />

        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/transactions' element={<Th />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
     </Router>

  );
}

export default App;
