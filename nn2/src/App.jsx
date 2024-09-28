import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login'; 
import Register_d from './pages/DONOUR/Register_d';
import Register_n from './pages/NGO/Register_n';
import Register_v from './pages/VOLUNTEER/Register_v';
import Home_d from './pages/DONOUR/Home_d';
import Home_n from './pages/NGO/Home_n';
import Home_v from './pages/VOLUNTEER/Home_v';
import HomeLink_d from './pages/DONOUR/Donour_Components/HomeLink_d';
import AboutLink_d from './pages/DONOUR/Donour_Components/AboutLink_d';
import PostDonation_d from './pages/DONOUR/Donour_Components/PostDonation_d';
import DonationCards_n from './pages/NGO/NGO_Components/DonationCards_n';
import RequestFood from './pages/NGO/NGO_Components/RequestFood';
import Razorpay_d from './pages/DONOUR/Donour_Components/Razorpay_d';
import AllNGOs_f from './pages/DONOUR/AllNGOs_f';
import AssignedTasks_v from './pages/VOLUNTEER/Volunteer_Components/AssignedTasks_v';
import ManageTasks_v from './pages/VOLUNTEER/Volunteer_Components/ManageTasks_v';
import History_v from './pages/VOLUNTEER/Volunteer_Components/History_v';
import HomeLink_v from './pages/VOLUNTEER/Volunteer_Components/HomeLink_v';
import CurrentPickup_v from './pages/VOLUNTEER/Volunteer_Components/CurrentPickup_v';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register_d" element={<Register_d />} />
        <Route path="/register_n" element={<Register_n />} />
        <Route path="/register_v" element={<Register_v />} />

        <Route path="/home_d" element={<Home_d />}>
          <Route path="homeLink_d" element={<HomeLink_d />} />
          <Route path="aboutLink_d" element={<AboutLink_d />} />
          <Route path="postDonation_d" element={<PostDonation_d />} />
          <Route path="postDonation_d/allNgos_f" element={<AllNGOs_f />} />
          <Route path="razorpay_d" element={<Razorpay_d />} />
        </Route>

        <Route path="/home_n" element={<Home_n />}>
          <Route path="requestDonations" element={<RequestFood />} />
          <Route path="viewDonations" element={<DonationCards_n />} />
        </Route>

        <Route path="/home_v" element={<Home_v />}>
          <Route path="homeLink_v" element={<HomeLink_v />} />
          <Route path="aboutLink_v" element={<AboutLink_d />} />
          <Route path="assignedTasks_v" element={<AssignedTasks_v />} />
          <Route path="manageTasks_v" element={<ManageTasks_v />} />
          <Route path="history_v" element={<History_v />} />
          <Route path="currentPickup_v" element={<CurrentPickup_v />} /> {/* Add this line */}
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
