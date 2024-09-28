import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'; // Assuming you have a firebase configuration file
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const db = getFirestore(app);
const userRef = collection(db, 'users'); // Replace 'users' with your Firestore collection name

const Login = () => {
  // State hooks for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Login handler function
  const check = async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    try {
      // Authenticate user with Firebase
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful');

      // Fetch user role from Firestore based on email
      const querySnapshot = await getDocs(query(userRef, where('Email', '==', email)));
      if (!querySnapshot.empty) {
        const queryData = querySnapshot.docs[0].data();
        const userId = querySnapshot.docs[0].id;

        // Store user data in localStorage
        localStorage.setItem('userData', JSON.stringify(queryData));

        // Navigate based on user role
        if (queryData.Role === 'Donor') {
          navigate('/home_d');
        } else if (queryData.Role === 'NGO') {
          navigate('/home_n');
        } else if (queryData.Role === 'Volunteer') {
          navigate('/home_v');
        }
      }
    } catch (error) {
      console.error('Error logging in: ', error);
      alert('Login Failed');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-gray-500">
              Don't have an account?
              <span className="text-green-600 ml-1" onClick={()=>navigate('/')}>Sign Up</span>
            </a>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back to NourishNet</h1>
          <p className="text-gray-500 mb-6">
            Join us in redistributing surplus food to nourish lives. Let's make a positive impact together.
          </p>
          <form onSubmit={check}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Setting email state
                placeholder="example@gmail.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Setting password state
                placeholder="6+ strong characters"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign In
            </button>
          </form>

          {/* Social Media Login Options */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Or sign in with</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-white border border-gray-300 rounded-md p-2">
                <img
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-W95wyR9yakFLX6ikUhRP8CFt.png"
                  alt="Google logo"
                  width="24"
                />
              </button>
              <button className="bg-white border border-gray-300 rounded-md p-2">
                <img
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-EAzsBNnXS5BYifbhG33WXy2f.png"
                  alt="Facebook logo"
                  width="24"
                />
              </button>
              <button className="bg-white border border-gray-300 rounded-md p-2">
                <img
                  src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-aNtk6eKtVWEz2UwAIDzru7MZ.png"
                  alt="Apple logo"
                  width="24"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration/Quote */}
      <div className="w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md text-center">
          <div className="mb-4">
            <div className="bg-green-800 rounded-full w-10 h-10 flex items-center justify-center mx-auto">
              <i className="fas fa-quote-left text-white"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Together We Can Make a Difference</h2>
          <p className="text-gray-200 mb-6">
            "The best way to find yourself is to lose yourself in the service of others." — Mahatma Gandhi
          </p>
          <div className="flex items-center justify-center">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-OugMdjXMs8tyrnybTyr053ao.png"
              alt="Profile picture"
              className="rounded-full mr-3"
              width="40"
              height="40"
            />
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-300">Volunteer, NourishNet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
