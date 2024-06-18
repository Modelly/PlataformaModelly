import VendedorLayout from '../../components/layout/pop_vendedor/VendedorLayout.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import React from 'react';

const Vendedor = () => {
  return (
    <div className="bodyHTML">
      <Navbar />
      <VendedorLayout />
    </div>
  );
};

export default Vendedor;