import React, { useState } from 'react';

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState('');

  const onClick = async (createNew = false) => {
    await getMeetingAndToken(createNew ? null : meetingId);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-950'>
      <div className='mb-20 items-center justify-center'>
        <p className='text-center text-white text-4xl'>Welcome to Video Chat where Video Calls & Meetings for Everyone </p>
      </div>
      <div className='w-80 h-72 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg'>
        <h1 className='items-center mt-3 text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Video Chat
        </h1>
        <input
          type='text'
          placeholder='Enter Meeting ID'
          className='w-full p-2 mt-3 mb-8 border rounded dark:bg-gray-700 dark:text-white'
          onChange={e => setMeetingId(e.target.value)}
        />
        <div className='flex space-x-4'>
          <button
            className='w-full p-1 bg-blue-500 text-black rounded dark:bg-white'
            onClick={() => onClick(false)}>
            Join
          </button>
          <button
            className='w-full p-2 bg-blue-500 text-white rounded dark:bg-blue-700'
            onClick={() => onClick(true)}>
            Create Meeting
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinScreen;
