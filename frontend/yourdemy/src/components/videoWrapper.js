// VideoWrapper.js
import React from 'react';

function VideoWrapper() {
  return (
    <div className="video-wrapper">
      <video controls className="video-controller">
        <source src="path/to/your-video.mp4" type="video/mp4" />
        <source src="path/to/your-video.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoWrapper;
