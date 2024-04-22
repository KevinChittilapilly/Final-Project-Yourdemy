// CoursePage.js
import React, { useEffect, useState } from "react";
import VideoWrapper from "./videoWrapper";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import { getCoursesDetails } from "../action/actions";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./loading";
import { quizLocation } from "./util";
import Popover from "./popover";
import useMobile from "../hooks/useMobile";

function CoursePage() {
  const [courseDetails, setCourseDetail] = useState();
  
  const [activeCourse, setActiveCourse] = useState();
  const [activeSecID, setActiveSecID] = useState(1)
  const [courseCompleted, setCourseCompleted] = useState(false)
  const [showQuizPopover, setShowQuizPopover] = useState(null)
  const navigate = useNavigate()
  const quiz_location = "End of Course"
  const { state } = useLocation();
  const course_id = state.course_id || "";
  const isMobile = useMobile();
  const [sidebaropen, setSidebarOpen] = useState(!isMobile);
  useEffect(() => {
    getCoursesDetails(course_id).then((resp) => {
      setCourseDetail(resp);
    });
  }, []);

  useEffect(() => {
    const course =
      courseDetails?.sections &&
      courseDetails.sections[0]?.video_lectures &&
      courseDetails.sections[0].video_lectures[0];
      if(course) {
        setActiveCourse(course);
      }
        
  }, [courseDetails]);



  const handleSidebar = () => {
    setSidebarOpen(!sidebaropen);
  };

  const handleCourseClick = (lec,id) => {
    setActiveCourse(lec)
    setActiveSecID(id)
  }

  
  useEffect(()=>{
    if (quiz_location==quizLocation.endofSection && activeSecID!=1) {
      let questions = []
      courseDetails.sections[activeSecID-2]?.video_lectures?.map((lec)=>{
        if (lec.quiz_questions) {
          questions.push(...lec.quiz_questions)
        }
      })
      questions.length>0 && setShowQuizPopover(questions)
    } else if(quiz_location==quizLocation.endofCourse && courseCompleted){
      let questions = []
      courseDetails.sections.map((sec)=>{
        sec.video_lectures?.map((lec)=>{
          if (lec.quiz_questions) {
            questions.push(...lec.quiz_questions)
          }
        })
      })
      
      questions.length>0 && setShowQuizPopover(questions)
    }
  },[activeCourse,activeSecID,courseCompleted])

  const handleCourseCompletion = () =>{
    setCourseCompleted(true)
  }
  const closePopover = () =>{
    setShowQuizPopover(null)
    courseCompleted && navigate("/home")
  }
  return courseDetails && activeCourse ? (
    <div className="outer-div">
      <div
        className="course-page"
        style={sidebaropen ? { flex: "0.8" } : { flex: "1" }}
      >
        <VideoWrapper course ={activeCourse}/>
        <Dashboard
          about={courseDetails.about}
          description={courseDetails.description}
          instrs_des={courseDetails.instrs_des}
          title ={courseDetails.title}
        />
      </div>
      {sidebaropen ? (
        <Sidebar
          sections={courseDetails.sections}
          handleSidebar={() => handleSidebar()}
          handleCourseClick = {handleCourseClick}
          activeCourse={activeCourse}
          handleCourseCompletion = {()=>handleCourseCompletion()}
          courseCompleted = {courseCompleted}
        />
      ) : (
        <div className="sidebar-open">
          
          {isMobile?<text onClick={()=>handleSidebar()}>Lecture List</text>:<span
            class="material-symbols-outlined"
            onClick={() => handleSidebar()}
          >
            arrow_back
          </span>}
        </div>
      )}
      {showQuizPopover && <Popover type="quizes" setShowPopup={closePopover} content={showQuizPopover}/>}
    </div>
  ) : (
    <Loading />
  );
}

export default CoursePage;
