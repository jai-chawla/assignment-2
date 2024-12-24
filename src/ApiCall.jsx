import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ClickButton from './utils/ClickButton'
import Loader from './utils/Loader';

const ApiCall = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const user = response.data.results[0]; // Extract the first user details
      setDetails(user);
      toast.success('User fetched successfully!');
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Failed to fetch user data. Please try again.');
      setIsLoading(false);
    }
  };

  if(isLoading){
    return <Loader />
  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center bg-gray-200">
      {details && (
        <div className="bg-white shadow-lg rounded-md p-8 mb-4 flex w-auto border-4 border-black mx-1">
          {/* Left Column - Image */}
          <div className="w-auto h-auto sm:w-1/3 border-2 border-gray-200 rounded-lg">
            <img
              src={details.picture.large}
              alt="User"
              className="rounded-md w-full h-auto"
            />
          </div>
          {/* Right Column - Details */}
          <div className="w-2/3 pl-4 flex flex-col justify-between">
            {/* First Row - Name */}
            <div>
              <h2 className="text-lg font-bold">{`${details.name.first} ${details.name.last}`}</h2>
            </div>
            {/* Second Row - Gender */}
            <div>
              <p className="text-gray-700 capitalize">
                <strong>Gender:</strong> {details.gender}
              </p>
            </div>
            {/* Third Row - Phone */}
            <div>
              <p className="text-gray-700">
                <strong>Phone Number:</strong> {details.phone}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Button */}
      <button
        onClick={handleClick}
      >
        <ClickButton/>
      </button>
    </div>
  );
};

export default ApiCall;
