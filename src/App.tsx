import React from 'react';

import Header from '../src/components/Header/Header';
import CalculatorComponent from './components/calculator/CalculatorComponent';
import Footer from '../src/components/Footer/Footer';

import './global/reset.css';
import './global/global.scss';

function App() {
  return (
    <div className="body__container">
      <Header />
      <CalculatorComponent />
      <Footer />
    </div>
  );
}

export default App;
