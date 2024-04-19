// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-banner">
        <div className="title">Course content</div>
        <span className="material-symbols-outlined"> close </span>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-button">
            <div className="title">Section 1: Introduction - AWS Certified Solutions Architect Associate
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
            <p>4 / 6 | 13min</p>
          </button>
          <div className="panel"></div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button">
            <div className="title">Section 2: Code & Slides Download
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
            <p>1 / 1 | 1min</p>
          </button>
          <div className="panel"></div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button">
            <div className="title"> Section 3: Getting started with AWS
              <span className="material-symbols-outlined"> expand_more </span>
            </div>
            <p>3 / 3 | 14min</p>
          </button>
          <div className="panel"></div>
        </div>
        {/* More sections... */}
      </div>
    </div>
  );
}

export default Sidebar;
