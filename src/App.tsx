import React from 'react';
import './App.css';
import Hero from './hero';
import './bootstrap.min.css';
import MainPage from './mainpage';
import Navbar from './nav';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ReservationForm from './reservationFrom';
import SuccessForm from './SuccessForm';


function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/reservatie' element={<ReservationForm />}/>
        <Route path='/success' element={<SuccessForm />}/>
      </Routes>
    
    </div>
    </Router>
    
  );
}

export default App;
