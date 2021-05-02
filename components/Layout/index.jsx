import React from 'react';
import Navbar from '../Navbars';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;