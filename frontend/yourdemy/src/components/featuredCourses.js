import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FeaturedCourses() {
  const [courses,setCourses] = useState([ {
    name: "Web Development Bootcamp",
    instructor: "Colt Steele",
    price: "$500",
    rating: "5",
    img_url: "../assets/course_1.png",
  },
  {
    name: "JavaScript: Understanding the Weird Parts",
    instructor: "Anthony Alicea",
    price: "$500",
    rating: "4",
    img_url: "../assets/course_2.jpeg",
  },
  {
    name: "Modern React with Redux",
    instructor: "Stephen Grider",
    price: "$500",
    rating: "3",
    img_url: "../assets/course_3.jpeg",
  },
  {
    name: "Python Django",
    instructor: "Stephen Grider",
    price: "$500",
    rating: "3",
    img_url: "../assets/course_3.jpeg",
  },])
  const API_BASE_URL = "http://127.0.0.1:8000/";

  useEffect(()=>{
    axios.get(API_BASE_URL+'course/').then((resp)=>{
      // console.log(data)
      setCourses(JSON.parse(JSON.stringify(resp.data)))
    }).catch(
      console.log("Error")
    )
  },[])
  return (
    <section className="featured-courses">
      <h1>Featured Courses</h1>
      <div id="courses-list">
        {console.log(courses)}
        {courses.map((course)=>{
          return(
            <div className='course-item'>
              <img src={course.img_url} class="course_img"/>
              <h4 class="course-title">{course.title}</h4>
              <div class="bottom-div">
              <p class="instructer">Instructor: {course.instructor}</p>
              <p>Price: {course.price}</p>
              {/* <p>Rating: ${ratingToStars(course.rating)}</p> */}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default FeaturedCourses;
