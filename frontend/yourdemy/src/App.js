// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header";
import CoursePage from "./components/coursePage";
import Footer from "./components/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import Feedback from "./components/feedback";
import FeaturedCourses from "./components/featuredCourses";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";

const API_BASE_URL = "http://127.0.0.1:8000/";

function App() {
  const [courses, setCourses] = useState([]);

  // const [clickedId, setClickedId] = useState(null);

  // const handleButtonClick = (id) => {
  //   setClickedId(id);
  // };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={() => <FeaturedCourses />}></Route>
          <Route path="/home" Component={() => <FeaturedCourses />} />
          <Route path="/login" Component={() => <Login />}></Route>
          <Route path="/signup" Component={() => <Signup />}></Route>
          <Route path="/feedback" Component={() => <Feedback />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
