import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Razorpay_d = () => {
    const ngoList = [
        { name: 'Helping Hands' },
        { name: 'Food For All' },
        { name: 'Care Givers' },
        { name: 'We Feed' },
        { name: 'Nurture World' },
        { name: 'Meal Support' },
        { name: 'Food Savior' },
        { name: 'Hunger Relief' },
        { name: 'Aid Access' },
        { name: 'Charity Food' }
    ];

    const [selectedNGO, setSelectedNGO] = useState(null);
    const [amount, setAmount] = useState(100);
    const [responseId, setResponseId] = useState("");
    const [responseState, setResponseState] = useState(null);

    const navigate = useNavigate();

    const handleRadioChange = (ngoName) => {
        setSelectedNGO(ngoName);
    };

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const createRazorpayOrder = async () => {
        try {
            const response = await axios.post("http://localhost:5000/orders", {
                amount: amount * 100,
                currency: "INR"
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            handleRazorpayScreen(response.data.amount);
        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    const handleRazorpayScreen = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Error loading Razorpay script");
            return;
        }

        const options = {
            key: 'rzp_test_GcZZFDPP0jHtC4',
            amount: amount,
            currency: 'INR',
            name: selectedNGO || "NGO", // Update name based on selected NGO
            description: "Donation to NGO",
            image: "https://papayacoders.com/demo.png",
            handler: (response) => setResponseId(response.razorpay_payment_id),
            prefill: { name: "Donor Name", email: "donor@example.com" },
            theme: { color: "#F4C430" }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const paymentFetch = async (e) => {
        e.preventDefault();
        const paymentId = e.target.paymentId.value;

        try {
            const response = await axios.get(`http://localhost:5000/payment/${paymentId}`);
            setResponseState(response.data);
        } catch (error) {
            console.error("Error fetching payment:", error);
            alert("Error fetching payment details. Please check the Payment ID.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">NGO List Near Me</h1>
            
            <ul className="space-y-4">
                {ngoList.map((ngo, index) => (
                    <li key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
                        <label className="flex items-center space-x-3">
                            <input
                                type="radio"
                                className="form-radio h-5 w-5 text-green-500"
                                name="ngo"
                                checked={selectedNGO === ngo.name}
                                onChange={() => handleRadioChange(ngo.name)}
                            />
                            <span className="text-lg font-medium text-gray-800">{ngo.name}</span>
                        </label>
                    </li>
                ))}
            </ul>

            {selectedNGO && (
                <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
                    <strong>You selected:</strong> {selectedNGO}
                </div>
            )}

            <div className="mt-4">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 rounded p-2"
                    placeholder="Enter Amount"
                    required
                />
                <button
                    onClick={createRazorpayOrder}
                    className="ml-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
                >
                    Donate
                </button>
            </div>

            {responseId && <p className="mt-4">Payment ID: {responseId}</p>}

            <h2 className="mt-6 text-xl">Payment Verification Form</h2>
            <form onSubmit={paymentFetch} className="mt-4">
                <input
                    type="text"
                    name="paymentId"
                    placeholder="Enter Payment ID"
                    required
                    className="border border-gray-300 rounded p-2"
                />
                <button type="submit" className="ml-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                    Fetch Payment
                </button>
                {responseState && (
                    <ul className="mt-4">
                        <li>Amount: {(responseState.amount / 100).toFixed(2)} Rs.</li>
                        <li>Currency: {responseState.currency}</li>
                        <li>Status: {responseState.status}</li>
                        <li>Method: {responseState.method}</li>
                    </ul>
                )}
            </form>
        </div>
    );
};

export default Razorpay_d;
