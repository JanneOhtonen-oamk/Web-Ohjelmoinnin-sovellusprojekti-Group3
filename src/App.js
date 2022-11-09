import './App.css';
import React from 'react';
import { ReactChild } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header />
    <Navbar />
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    <footer />
    </>
  );
}

export default App;
