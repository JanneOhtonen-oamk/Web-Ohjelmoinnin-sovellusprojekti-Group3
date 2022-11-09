import React from 'react';
import './Components.css';
import {link} from 'react-router-dom';
import App from '../App';

export default function Home() {
  return (
    <div className="App">
      
      <div class="header">
        <h1>Header here</h1>
      </div>
    
      <div class="row">
        <div class="col-3 navbar">
          <button class="btn-1"><Link className="nav-link" to="/">Home</Link></button>
          <button class="btn-2"><Link to="/login">Login</Link></button>
          <button class="btn-1"><Link to="/signup">Sign up</Link></button>
        </div>
      </div>

      <div class="col-6">
        <h1>Blaa blaa</h1>
        <p>Blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa
        blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa
        blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa
        blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa
        blaa blaa blaa blaa blaa blaa blaa blaa blaa 
        blaa blaa blaa blaa blaa blaa blaa blaa blaa.
        </p>
      </div>
      
      <div class="col-3">
        <div class="aside">
          <h2>Jotaki</h2>
          <p>Jotaki</p>
          <h2>Jotaki</h2>
          <p>Jotaki</p>
          <h2>Jotaki</h2>
          <p>Jotaki</p>
          <h2>Jotaki</h2>
          <p>Jotaki</p>
         
        </div>
      </div>  
        <div class="footer">
      <p>Blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa.</p>
        </div>
    </div>
    
     
  );
}
