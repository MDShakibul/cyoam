import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../Images/icon.svg';
import './Header.css';

const Header = () => {
    return (
        <section className='container'>
        <nav className="navbar navbar-expand-lg py-0" style={{ height:'120px' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to=""><img src={icon} className="img-fluid" alt="Logo"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-danger"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link me-3" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="">Showcase</Link>
              </li>

              <a href="" className='mt-2 link-icon-1 me-2'>dfgg</a>
              <a href="" className='mt-2 link-icon-2 me-2'>dfgg</a>
              <a href="" className='mt-2 link-icon-3'>dfgg</a>
            </ul>
          </div>
        </div>
      </nav>
      
        </section>
    );
};

export default Header;