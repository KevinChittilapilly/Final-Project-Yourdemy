// CoursePage.js
import React from 'react';
import VideoWrapper from './videoWrapper';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

function CoursePage() {
  return (
    <div className="outer-div">
      <div className="course-page">
        <VideoWrapper />
        <Dashboard />
      </div>
      <Sidebar />
    </div>
  );
}

export default CoursePage;
