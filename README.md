#  VideoSDK for ReactJS

At Video SDK, we’re building tools to help companies create world-class collaborative products with capabilities of live audio/videos, compose cloud recordings/TRMP/HLS, and interaction APIs.

## 📋 Prerequisites

Before setting up the project, ensure you have the following:

- ⚛️ React v16 or later
- 🟢 Node v10 or later
- 🔑 A VideoSDK account

## 🚀 Running the Sample App

Follow these steps to set up and run the app on your device:

### Step 1: Clone the Repo
Clone the repository to your local machine:
```bash
git clone https://github.com/Sharaf-19/video-chat-videosdk-react.git
cd video-chat-videosdk-react # Navigate into the project directory
```

### Step 2: Generate a Token:

- Go to the VideoSDK dashboard: [VideoSDK Dashboard](https://app.videosdk.live/signup).
- Sign up or log in to your account.
- Navigate to the "API Keys".
- Generate a new temporary token. Copy this token; you'll need it in the next step.

### 3. Configure the Environment File:

Within the cloned repository, locate the .env file. Replace YOUR_TEMPORARY_TOKEN with the generated token from your account:

```bash
REACT_APP_VIDEOSDK_TOKEN="YOUR_TEMPORARY_TOKEN"
```

### 4. Install Dependencies:

Install the project's dependencies using npm:

```bash
npm install
```

### 5. Launch the App:

Start the application using npm:

```bash
npm start
```
This will compile the application and start a development server. Open your web browser and navigate to the address shown in the terminal (usually http://localhost:3000) to view the application.



## ✨ Features

- 🔊 **Live Audio/Video:** Engage in real-time communication with high-quality audio and video.
- 📹 **Cloud Recordings:** Easily record your sessions for future reference.
- 📡 **RTMP/HLS Streaming:** Stream your sessions live to a wide audience.
- 🔄 **Token Management:** Secure and manage access to your video sessions with ease.



## 📚 Usage

Here are some of the key VideoSDK methods used in the project:

### Joining a Meeting

- `useMeeting`: This hook is used to manage and control meeting state and actions.
  ```js
  const { join } = useMeeting();

### Controlling Audio/Video
- `toggleMic`: Toggles the microphone on and off.
- `toggleWebcam`: Toggles the webcam on and off.
- `leave`: Leaves the meeting.

  ```js
  const { toggleMic, toggleWebcam, leave } = useMeeting();

### Displaying Participants
- `participants`: Provides access to the list of participants in the meeting
  ```js
  const { participants } = useMeeting();

### Handling Participant Streams
- useParticipant: This hook is used to manage individual participant's streams.
  ```js
  const { webcamStream, webcamOn } = useParticipant(participantId);

## 📚 Documentation

For more detailed documentation, visit the [VideoSDK Documentation](https://docs.videosdk.live/).

## 🙏 Acknowledgments

- [VideoSDK](https://www.videosdk.live/)

---

Happy Coding! 🚀


