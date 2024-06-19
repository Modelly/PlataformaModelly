import SobreLayout from '../../components/layout/Sobre/Sobre_Layout.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import React from 'react';
import Footer from '../../components/layout/Footer/Footer.jsx';

const Sobre = () => {
  return (
    <div className="bodyHTML">
      <Navbar />
      <SobreLayout />
      <Footer/>
    </div>
  );
};

export default Sobre;