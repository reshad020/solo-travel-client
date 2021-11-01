import React from 'react';

const About = () => {
    return (
        <div>
        <h1 className="text-3xl font-bold mt-8 text-center">About Us</h1>
        <div className="flex justify-center mb-12">
        <p className="text-xl font-semibold mt-12 w-3/4 text-gray-500">The Fight Against Cancer is a nationwide, community-based voluntary health organization dedicated to eliminating cancer as a major health problem. Our Global Headquarters are located in Atlanta, Georgia, and we have regional and local offices throughout the country to ensure we have a presence in every community. Learn more about who we are, what we do, and our plans for the future by exploring the areas below.</p>
        </div>
        <h1 className="text-3xl font-bold mt-8 text-center">What we do?</h1>
        <div className="flex justify-center mb-12">
        <p className="text-xl font-semibold mt-12 w-3/4 text-gray-500">While most people know us for our research, we do so much more. We attack cancer from every angle. We promote healthy lifestyles to help you prevent cancer. We research cancer and its causes to find more answers and better treatments. We fight for lifesaving policy changes. We provide everything from emotional support to the latest cancer information for those who have been touched by cancer. And we do it all 24 hours a day, 7 days a week.</p>
        </div>
    </div>
    );
};

export default About;