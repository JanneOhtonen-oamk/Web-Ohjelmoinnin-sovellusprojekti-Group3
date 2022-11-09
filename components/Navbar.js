import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
         
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="row">
        <div class="col-3 navbar">
          <Link className="nav-link" to="/"><button class="btn-1">Home</button></Link>
            <Link to="/login"><button class="btn-1">Login</button></Link>
          <Link to="/signup"><button class="btn-1">Sign up</button></Link>
          </div>
      </div>

          
        </div>
      </nav>
    );
}