import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

import logo from '../assets/logo.png';

const Home = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user.Role === 'Donor') {
          navigate('/Home_d');
        } else if (user.Role === 'NGO') {
          navigate('/Home_n');
        }
        else if(user.Role === "Volunteer") {
          navigate('/Home_v');
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, [navigate]);

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img
            alt="NourishNet Logo"
            className="h-10"
            src={logo}
            width="50"
          />
          <span className="ml-2 text-xl font-semibold text-green-800">NourishNet</span>
        </div>
        <button
          className="bg-green-700 px-6 py-3 rounded-full text-white"
          onClick={handleLoginClick} // Attach the click handler here
        >
          Login
        </button>
      </header>
      <main className="relative">
        <video autoPlay className="w-full h-screen object-cover" loop muted>
          <source src="https://firebasestorage.googleapis.com/v0/b/ngos-ef983.appspot.com/o/meals-mission-desktop.mp4?alt=media&token=87bcb317-5887-4cfb-9194-bfce2d36d6ba" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">NourishNet: Reducing Waste, Nourishing Lives</h1>
          <p className="mt-4 text-lg">
            Join us in redistributing surplus food to those who need it most.
            <br />
            Be part of the solution today!
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-green-700 px-6 py-3 rounded-full" onClick={()=>navigate('/register_d')}>Join As Donor</button>
            <button className="bg-orange-600 px-6 py-3 rounded-full" onClick={()=>navigate('/register_n')}>Join As NGO</button>
            <button className="bg-orange-600 px-6 py-3 rounded-full"  onClick={()=>navigate('/register_v')}>Join As Volunteer</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
