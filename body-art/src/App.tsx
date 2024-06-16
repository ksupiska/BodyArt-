import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './main/Home';
import HeaderHomeContainer from './components/HeaderHome';
import TattooContainer from './main/Tattoo';
import HeaderTattooContainer from './components/HeaderTattoo';

import HeaderPriceContainer from './components/HeaderPrice';
import Price from './main/Price';

import Reviews from './main/Reviews';
import HeaderReviewsContainer from './components/HeaderReviews';

import References from './main/References';
import HeaderReferencesContainer from './components/HeaderReferences';

import FooterContainer from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattoo" element={<TattooContainer />} />
        <Route path="/price" element={<Price />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/references" element={<References />} />
      </Routes>
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
        <Route
          path="/price"
          element={
            <>
              <HeaderPriceContainer />
              <Price />
              <FooterContainer />
            </>
          }
        />
        <Route
          path="/reviews"
          element={
            <>
              <HeaderReviewsContainer />
              <Reviews />
              <FooterContainer />
            </>
          }
        />
        <Route
          path="/references"
          element={
            <>
              <HeaderReferencesContainer />
              <References />
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
