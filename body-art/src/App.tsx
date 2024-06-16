import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './main/Home';
import HeaderHomeContainer from './components/HeaderHome';
import TattooContainer from './main/Tattoo';
import HeaderTattooContainer from './components/HeaderTattoo';

import FooterContainer from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattoo" element={<TattooContainer />} />
        {/* <Route path="/price" element={<Price />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        {/* <Route path="/references" element={<References />} /> */}
      </Routes>
      {/* <FooterContainer /> */}
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderHomeContainer />
                <Home />
                <FooterContainer />
              </>
            }
          />
          <Route
          path="/tattoo"
          element={
            <>
              <HeaderTattooContainer />
              <TattooContainer />
              <FooterContainer />
            </>
          }
        />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
