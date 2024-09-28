import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageTasks_v = () => {
  const navigate = useNavigate();
  const [activeTaskId, setActiveTaskId] = useState(null);

  const tasks = [
    {
      id: 1,
      task: 'Pickup bread from XYZ Hotel',
      time: '12:00 AM',
      date: '30 September'
    },
    {
      id: 2,
      task: 'Pickup milk from ABC Store',
      time: '2:00 PM',
      date: '1 October'
    },
    // Add more tasks here
  ];

  const handlePickup = (taskId) => {
    setActiveTaskId(taskId);
    navigate('/home_v/currentPickup_v'); // Route to CurrentPickup_v
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Your Tasks</h1>
      
      <div className="space-y-6">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-left">
              <p className="text-xl font-semibold text-gray-700">{task.task}</p>
              <p className="text-gray-500">{task.time} on {task.date}</p>
            </div>
            <button 
              onClick={() => handlePickup(task.id)} 
              className={`mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out ${activeTaskId ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={activeTaskId !== null} // Disable if another task is active
            >
              {activeTaskId ? 'Going For Pickup' : 'Pickup'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTasks_v;
