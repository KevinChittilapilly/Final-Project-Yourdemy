// CoursePage.js
import React, { useEffect, useState } from "react";
import VideoWrapper from "./videoWrapper";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import { getCoursesDetails } from "../action/actions";
import { useLocation } from "react-router-dom";
import Loading from "./loading";

function CoursePage() {
  const [courseDetails, setCourseDetail] = useState();
  const [sidebaropen, setSidebarOpen] = useState(true);
  const { state } = useLocation();
  const course_id = state.course_id || "";
  useEffect(() => {
    console.log(state);
    getCoursesDetails(course_id).then((resp) => {
      setCourseDetail(resp);
    });
  }, []);
  const handleSidebar = () => {
    console.log("here");
    setSidebarOpen(!sidebaropen);
  };
  return courseDetails ? (
    <div className="outer-div">
      {console.log(courseDetails)}
      <div
        className="course-page"
        style={sidebaropen ? { flex: "0.8" } : { flex: "1" }}
      >
        <VideoWrapper />
        <Dashboard
          about={courseDetails.about}
          description={courseDetails.description}
          instrs_des={courseDetails.instrs_des}
        />
      </div>
      {sidebaropen ? (
        <Sidebar
          sections={courseDetails.sections}
          handleSidebar={() => handleSidebar()}
        />
      ) : (
        <div className='sidebar-open'>
          <span class="material-symbols-outlined" onClick={()=>handleSidebar()}>arrow_back</span>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default CoursePage;
