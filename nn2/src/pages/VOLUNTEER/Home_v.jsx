import React from 'react';
import Nav_v from './Volunteer_Components/Nav_v';
import { useProfile } from '../../context/ProfileContext';
import { Outlet } from 'react-router-dom';
import Profile_d from '../DONOUR/Donour_Components/Profile_d';
function Home_v() {
  const { showProfile } = useProfile();
  return (
    
    <>
    <Nav_v />
        
      
        <div className="container mx-auto py-6 px-4">
          {showProfile && <Profile_d />} {/* Render Profile_d conditionally */}
          <Outlet />
        </div>
    </>
  );
}

export default Home_v;
