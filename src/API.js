// This is the Auth token, you will use it to generate a meeting and connect to it
// Importing the environment variables 

export const authToken = process.env.REACT_APP_VIDEOSDK_TOKEN;

// API call to create a meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  // Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};
