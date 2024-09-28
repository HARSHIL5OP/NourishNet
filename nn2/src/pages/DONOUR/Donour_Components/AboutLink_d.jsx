import React from 'react';

const AboutLink_d = () => {
    return (
        <div className="bg-white text-gray-800 relative z-10"> 
            {/* Header */}
            <header className="relative z-5">
                <img
                    src="https://placehold.co/1600x512"
                    alt="NourishNet platform"
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-0">
                    <h1 className="text-4xl font-bold text-white z-0">NourishNet - Make a Difference with Your Donation</h1>
                    <p className="text-lg text-white mt-2 z-0">
                        A Platform Connecting You with NGOs to Minimize Food Waste and Fight Hunger
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12 px-4 md:px-16 lg:px-32">
                {/* About Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <div className="h-1 w-16 bg-green-500 mb-6"></div>
                    <p className="text-lg mb-6">
                        NourishNet is a food redistribution platform that enables individuals, businesses, and food donors
                        to contribute surplus food to those in need. By connecting with a network of NGOs, donors can
                        ensure that their contributions reach the right hands, while also playing a part in minimizing food
                        waste.
                    </p>

                    <p className="text-lg mb-6">
                        As a donor, you can choose to donate surplus food or raw materials to one, many, or all of the NGOs
                        on our platform. You'll also be able to track the status of your donation, including the volunteer who
                        will pick up your contribution, ensuring transparency and ease of use.
                    </p>
                </section>

                {/* Key Features Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-4">Our Key Features</h2>
                    <div className="h-1 w-16 bg-green-500 mb-6"></div>
                    <div className="flex flex-col space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-start mb-6">
                            <div className="text-green-500 text-2xl mr-4">
                                <i className="fas fa-network-wired"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Chain of NGOs</h3>
                                <p>
                                    NourishNet has partnered with a wide range of NGOs across the region. You can view and
                                    choose the NGOs closest to you or the ones whose mission aligns with your values.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start mb-6">
                            <div className="text-green-500 text-2xl mr-4">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Donate Surplus Food or Raw Materials</h3>
                                <p>
                                    Whether you are an individual with leftover food or a business with surplus raw
                                    materials, you can easily donate through our platform to help feed the needy.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start mb-6">
                            <div className="text-green-500 text-2xl mr-4">
                                <i className="fas fa-history"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">View Donation History</h3>
                                <p>
                                    You can keep track of your past donations, see which NGOs received your contributions,
                                    and monitor the impact you've made.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-start mb-6">
                            <div className="text-green-500 text-2xl mr-4">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Track Volunteer Pickup</h3>
                                <p>
                                    Once you've made a donation, track the volunteer who will pick up the food from your
                                    location. You’ll receive real-time updates so you know exactly when your donation will
                                    be collected.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mt-12 text-center">
                    <button className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600">
                        See All NGOs Near You
                    </button>
                </section>

                {/* Image Gallery */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-VhQLxcLVaBVjlJ3tyn6mPVHj.png"
                        alt="Smiling boy with food"
                        className="w-full h-auto object-cover"
                        width="400"
                        height="300"
                    />
                    <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-mJ0KjiRklza76eIelERbdueQ.png"
                        alt="Smiling girl with food"
                        className="w-full h-auto object-cover"
                        width="400"
                        height="300"
                    />
                    <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-YaNNzjNX8AsF9h3NcjMn2vAN.png"
                        alt="Group of children with food"
                        className="w-full h-auto object-cover"
                        width="400"
                        height="300"
                    />
                </section>
            </main>
        </div>
    );
};

export default AboutLink_d;
