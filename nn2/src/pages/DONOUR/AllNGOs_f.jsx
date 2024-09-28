import React, { useState, useEffect } from 'react';

const AllNGOs_f = () => {
    // Sample NGO data with distances
    const ngoList = [
        { name: 'Helping Hands', distance: 2 },
        { name: 'Food For All', distance: 5 },
        { name: 'Care Givers', distance: 1.5 },
        { name: 'We Feed', distance: 3.7 },
        { name: 'Nurture World', distance: 0.8 },
        { name: 'Meal Support', distance: 4.2 },
        { name: 'Food Savior', distance: 3 },
        { name: 'Hunger Relief', distance: 2.5 },
        { name: 'Aid Access', distance: 6.1 },
        { name: 'Charity Food', distance: 1.9 }
    ];

    // State to manage selected NGOs
    const [selectedNGOs, setSelectedNGOs] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // Handle individual NGO selection
    const handleCheckboxChange = (ngoName) => {
        if (selectedNGOs.includes(ngoName)) {
            setSelectedNGOs(selectedNGOs.filter(name => name !== ngoName));
        } else {
            setSelectedNGOs([...selectedNGOs, ngoName]);
        }
    };

    // Handle Select All functionality
    const handleSelectAll = () => {
        if (!selectAll) {
            setSelectedNGOs(ngoList.map(ngo => ngo.name));
        } else {
            setSelectedNGOs([]);
        }
        setSelectAll(!selectAll);
    };

    // Sort NGOs by distance (nearest first)
    const sortedNGOs = ngoList.sort((a, b) => a.distance - b.distance);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">NGO List Near Me</h1>
                <div>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-green-500"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                        <span className="ml-2 text-gray-700">Select All</span>
                    </label>
                </div>
            </div>
            
            <ul className="space-y-4">
                {sortedNGOs.map((ngo, index) => (
                    <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-green-500"
                                checked={selectedNGOs.includes(ngo.name)}
                                onChange={() => handleCheckboxChange(ngo.name)}
                            />
                            <span className="text-lg font-medium text-gray-800">{ngo.name}</span>
                        </label>
                        <span className="text-sm text-gray-500">{ngo.distance} km away</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllNGOs_f;
