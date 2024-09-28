import React from 'react';
import Nav_n from './NGO_Components/Nav_n';

function Home_n() {
  return (
    
    <>
    <Nav_n/>
    <div className="container mx-auto py-6 px-4">
        {showProfile && <Profile_d />} {/* Render Profile_d conditionally */}
        <Outlet />
      </div>
    </>
  );
}

export default Home_n;
