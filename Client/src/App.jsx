/* eslint-disable no-undef */
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'
function App() {
  const videoRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/a2a46e8c-e2f3-4498-a15c-d622a2cee112/index.m3u8"

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    videoRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <VideoPlayer options={videoPlayerOptions} onReady = {handlePlayerReady} />
    </>
  )
}

export default App
