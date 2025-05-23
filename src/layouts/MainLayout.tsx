import React from 'react';
import { Outlet } from 'react-router-dom';

import { BurguerDespegable } from '../components/BurguerDespegable'; 
const MainLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
        <BurguerDespegable />
      </div>
    </>
  );
};

export default MainLayout;