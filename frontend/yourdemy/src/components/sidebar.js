// Sidebar.js
import React, { useState } from "react";

function Sidebar(props) {
  const [openPanels, setOpenPanels] = useState({});
  const handleAccordionClick = (index) => {
    setOpenPanels((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for the panel at index
    }));
  };
  const handleClose = () => {
    console.log('clicked')
    props.handleSidebar()
  }
  return (
    <div className="sidebar">
      <div className="top-banner">
        <div className="title">Course content</div>
        <span className="material-symbols-outlined" onClick={()=>handleClose()}> close </span>
      </div>
      {props?.sections?.map((section) => {
        return (
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-button"
                onClick={() => handleAccordionClick(section.id)}
              >
                <div className="title">
                  {section.title}
                  <span className="material-symbols-outlined">
                    {" "}
                    expand_more{" "}
                  </span>
                </div>
                <p>4 / 6 | 13min</p>
              </button>
              <div
                className={`panel panel-${section.id}`}
                style={{
                  maxHeight: openPanels[section.id] ? "max-content" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                {section.video_lectures?.map((lec) => {
                  return (
                    <p>
                      {" "}
                      <span class="material-symbols-outlined">check_box</span>
                      {lec.title}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
