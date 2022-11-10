import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav" class="navbar">
         
          <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="row">
        <div class="col-3 navbar">
          <ul>
          <li><Link className="nav-link" to="/"><button class="btn-1">Home</button></Link></li>
          <li><Link to="/login"><button class="btn-1">Log In</button></Link></li>
          <li><Link to="/signup"><button class="btn-1">Sign Up</button></Link></li>
          </ul>
          </div>
      </div>

          
        </div>
      </nav>
    );
}