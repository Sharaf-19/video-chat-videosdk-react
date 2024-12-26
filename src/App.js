import React, { useState } from 'react';
import JoinScreen from './components/JoinScreen';
import MeetingView from './components/MeetingView';
import { createMeeting, authToken } from './API';
import { MeetingProvider } from '@videosdk.live/react-sdk';


function App() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async id => {
    const meetingId = id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: 'Sharaf',
      }}
      token={authToken}>
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default App;
