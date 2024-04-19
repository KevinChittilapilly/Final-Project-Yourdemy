// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header';
import CoursePage from './components/coursePage';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Feedback from './components/feedback';
import FeaturedCourses from './components/featuredCourses';
import { Route, Router, Routes } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8000/api/';

function App() {
  const [courses, setCourses] = useState([]);

  // const [clickedId, setClickedId] = useState(null);

  // const handleButtonClick = (id) => {
  //   setClickedId(id);
  // };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/">
            <h1>Course Marketplace</h1>
            <FeaturedCourses />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

