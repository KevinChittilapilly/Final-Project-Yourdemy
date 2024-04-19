// TopBar.js
import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <span className="material-symbols-outlined"> search </span>
      <p style={{ borderBottom: '1px solid' }}>Overview</p>
      <p>Q&A</p>
      <p>Announcements</p>
    </div>
  );
}

export default TopBar;
