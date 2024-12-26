import React from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { FaVideo, FaMicrophone, FaTimes } from 'react-icons/fa';

function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();

  return (
    <div className='flex justify-center space-x-4'>
      <button className='p-2 bg-gray-200 dark:bg-green-700 rounded' onClick={() => toggleWebcam()}>
        <FaVideo className='text-gray-800 dark:text-gray-200' />
      </button>
      <button className='p-2 bg-gray-200 dark:bg-gray-700 rounded' onClick={() => toggleMic()}>
        <FaMicrophone className='text-gray-800 dark:text-gray-200' />
      </button>
      <button className='p-2 bg-gray-200 dark:bg-red-700 rounded' onClick={() => leave()}>
        <FaTimes className='text-gray-800 dark:text-gray-200' />
      </button>
    </div>
  );
}

export default Controls;
