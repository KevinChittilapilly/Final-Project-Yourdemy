
import React, { useEffect, useState } from 'react';
import { getCourses } from '../action/actions';
import { useNavigate } from 'react-router-dom';

function FeaturedCourses() {
  const [courses,setCourses] = useState([ ])
  const navigate  = useNavigate()
  
  useEffect(()=>{
    getCourses().then(data => {
      setCourses(data[0].data);
  });
  },[])

  function ratingToStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "★";
    }
    return stars;
  }

  return (
    <>
    <div class="banner-container">
      <div class="banner-image"></div>
    </div>
   
    <section className="featured-courses">
      <h1>Featured Courses</h1>
      <div id="courses-list">
        {courses?.map((course)=>{
          if (true) {
            return (
              <div className='course-item'>
              <img src={course.img_url} class="course_img"/>
        <h4 class="course-title">{course.name}</h4>
        <div class="bottom-div">
        <div class="title">
        <p class="instructer">Instructor: {course.instructor}</p>
        <div class="dropdown">
        <label for="duration1">Duration</label>
        <select id="duration1">
          <option>2 mins</option>
          <option>5 mins</option>
          <option>7 mins</option>
          <option>10 mins</option>
          <option>15 mins</option>
          <option>30 mins</option>
        </select>
      </div>
        </div>
        <div class="price-div">
        <p>Price: ${course.price}</p>
        <div class="dropdown">
        <label for="duration1">Quiz Location</label>
        <select id="duration1">
          <option>In between the lecture</option>
          <option>At the end of the lecture</option>
          <option>At the end of the module</option>
          <option>At the end of the course</option>
        </select>
        </div>
        </div>
        <div class="price-div">
        <p>Rating: {ratingToStars(course.rating)}</p>
        <button class="go-to-course" id="goToCourseButton" onClick={()=>navigate('/courses/'+course.course_id,{
              state: {
                course_id : course.course_id
              }
            })}> Go to Course </button>
        </div>
        </div>
        </div>
        
            )
          }
          return(
            <div className='course-item' onClick={()=>navigate('/courses/'+course.course_id,{
              state: {
                course_id : course.course_id
              }
            })}>
              <img src="https://drive.google.com/thumbnail?id=18ygY2cG3oEf5sbU0wXhrj90Vkdn3tCEH" alt='course_img' className="course_img"/>
              {/* <img src="https://drive.google.com/file/d/18ygY2cG3oEf5sbU0wXhrj90Vkdn3tCEH/" alt="Descriptive Text"  className="course_img"/>
              https://drive.google.com/file/d/18ygY2cG3oEf5sbU0wXhrj90Vkdn3tCEH/view?usp=sharing */}

              <h4 className="course-title">{course.title}</h4>
              <div className="bottom-div">
              <p className="instructer">Instructor: {course.instructor}</p>
              <p>Price: {course.price}</p>
              <p>Rating: {ratingToStars(course.rating)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
    </>
  );
}

export default FeaturedCourses;
