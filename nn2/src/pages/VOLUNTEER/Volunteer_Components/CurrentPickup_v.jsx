import React, { useState } from 'react';

const CurrentPickup_v = () => {
  const [isPickupDone, setIsPickupDone] = useState(false);
  const [isQualityChecked, setIsQualityChecked] = useState(false);
  const [isDeliveredToNgo, setIsDeliveredToNgo] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Current Pickup</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={isPickupDone} 
            onChange={() => setIsPickupDone(!isPickupDone)} 
            disabled={isPickupDone} 
          />
          <label className={`ml-2 ${isPickupDone ? 'line-through text-gray-400' : ''}`}>
            Pickup Done
          </label>
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={isQualityChecked} 
            onChange={() => setIsQualityChecked(!isQualityChecked)} 
            disabled={isQualityChecked || !isPickupDone} 
          />
          <label className={`ml-2 ${isQualityChecked ? 'line-through text-gray-400' : ''}`}>
            Initial Quality and Packaging Check
          </label>
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={isDeliveredToNgo} 
            onChange={() => setIsDeliveredToNgo(!isDeliveredToNgo)} 
            disabled={isDeliveredToNgo || !isQualityChecked} 
          />
          <label className={`ml-2 ${isDeliveredToNgo ? 'line-through text-gray-400' : ''}`}>
            Delivered to NGO
          </label>
        </div>
      </div>
    </div>
  );
};

export default CurrentPickup_v;
