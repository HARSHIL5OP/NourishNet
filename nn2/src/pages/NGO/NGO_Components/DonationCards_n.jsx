import React from 'react';

const DonationCards_n = () => {
    // Sample data for donation cards
    const donationData = Array(10).fill({
        foodType: "Vegetables",
        quantity: "10 kg",
        pickupAddress: "123 Nourish Lane, City",
        bestBefore: "2 months",
        description: "Fresh organic vegetables.",
    });

    return (
        <div className="p-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {donationData.map((donation, index) => (
                <div key={index} className="p-4 bg-white rounded-xl shadow-md space-y-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-xl font-bold">{donation.foodType}</h1>
                        </div>
                        <div className="text-gray-500">
                            <i className="fas fa-map-marker-alt"></i> {donation.pickupAddress}
                        </div>
                    </div>
                    <div className="text-gray-500">
                        <span>{donation.quantity}</span> - <span>Best Before: {donation.bestBefore}</span>
                    </div>
                    <div className="text-gray-700">
                        <p>{donation.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        
                        <div className='w-full flex justify-end'>
                            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                                Assign Volunteer
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DonationCards_n;
