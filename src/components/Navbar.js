import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
         
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="col-3 navbar">
          <button class="btn-1"><Link className="nav-link" to="/">Home</Link></button>
          <button class="btn-2"><Link to="/login">Login</Link></button>
          <button class="btn-1"><Link to="/signup">Sign up</Link></button>
            </div>
          
        </div>
      </nav>
    );
}