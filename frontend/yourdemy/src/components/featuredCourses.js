
import React, { useEffect, useState } from 'react';
import { getCourses } from '../action/actions';
import { useNavigate } from 'react-router-dom';

function FeaturedCourses() {
  const [courses,setCourses] = useState([ ])
  const navigate  = useNavigate()

  useEffect(()=>{
    getCourses().then(data => {
      setCourses(data);
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
    <section className="featured-courses">
      <h1>Featured Courses</h1>
      <div id="courses-list">
        {courses?.map((course)=>{
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
  );
}

export default FeaturedCourses;
