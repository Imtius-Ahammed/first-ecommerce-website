import React from 'react';
import YouTube from 'react-youtube';
import './YouTubeVideo.css';

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='video-container'>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
