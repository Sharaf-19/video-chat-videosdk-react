import React, { useState } from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import Controls from './Controls';
import ParticipantView from './ParticipantView';

function MeetingView({ meetingId, onMeetingLeave }) {
  const [joined, setJoined] = useState(null);
  const { join, participants } = useMeeting({
    onMeetingJoined: () => setJoined('JOINED'),
    onMeetingLeft: () => onMeetingLeave(),
  });

  const joinMeeting = () => {
    setJoined('JOINING');
    join();
  };

  return (
    <div className='h-screen p-8 dark:bg-gray-900 dark:text-white'>
      <h3 className='text-xl font-bold mb-4'>Meeting Id: {meetingId}</h3>
      {joined === 'JOINED' ? (
        <div>
          <Controls />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[...participants.keys()].map(participantId => (
              <ParticipantView participantId={participantId} key={participantId} />
            ))}
          </div>
        </div>
      ) : joined === 'JOINING' ? (
        <p>Joining the meeting...</p>
      ) : (
        <button
          className='p-2 bg-blue-500 text-white rounded dark:bg-blue-700'
          onClick={joinMeeting}>
          Join Meeting
        </button>
      )}
    </div>
  );
}

export default MeetingView;
