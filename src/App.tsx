import React from 'react';
import './styles/App.css';
import './styles/bootstrap.min.css';
import Navbar from './header';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ReservationForm from './sections/reservationSection';
import OverMijSection from './sections/overmijSection';
import WelkomSection from './sections/welkomSection';
import TherapieSection from './sections/therapieSection';
import TarievenSection from './sections/tarievenSection';
import VoorWieSection from './sections/voorwieSection';
import Footer from './footer';
import ScrollToTop from './scrollToTop';
import PrivacySection from './sections/privacySection';


function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <ScrollToTop>
      <Routes>
        
        <Route path='/' element={<WelkomSection />} />
        <Route path='/overMij' element={<OverMijSection />}/>
        <Route path='/therapie' element={<TherapieSection />}/>
        <Route path='/voorWie' element={<VoorWieSection />}/>
        <Route path='/tarieven' element={<TarievenSection />}/>
        <Route path='/aanmelden' element={<ReservationForm />}/>
        <Route path='/privacy' element={<PrivacySection />}/>
      </Routes>
      </ScrollToTop>
      <Footer />   
    </div>
   
    </Router>
    
  );
}

export default App;
