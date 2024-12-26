import React, { useEffect, useMemo, useRef } from 'react';
import { useParticipant } from '@videosdk.live/react-sdk';

function ParticipantView({ participantId }) {
  const webcamRef = useRef(null);
  const micRef = useRef(null);

  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  // Generate video stream
  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
    return null;
  }, [webcamStream, webcamOn]);

  // Play webcam video
  useEffect(() => {
    if (webcamRef.current && videoStream) {
      webcamRef.current.srcObject = videoStream;
      webcamRef.current.play().catch(err => console.error('Error playing video stream', err));
    } else if (webcamRef.current) {
      webcamRef.current.srcObject = null;
    }
  }, [videoStream]);

  // Play microphone audio
  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch(err => console.error('Error playing audio stream', err));
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micOn, micStream]);

  return (
    <div className='flex flex-col items-center mt-4 p-4 bg-white dark:bg-gray-800 rounded shadow'>
      <h3 className='text-lg font-bold dark:text-white'>Participant: {displayName}</h3>
      {webcamOn ? (
        <video
          ref={webcamRef}
          autoPlay
          playsInline
          muted={isLocal}
          className='h-44 border border-gray-300 dark:border-gray-600 rounded mt-2'
        />
      ) : (
        <p className='dark:text-white'>Webcam is off</p>
      )}
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
    </div>
  );
}

export default ParticipantView;
