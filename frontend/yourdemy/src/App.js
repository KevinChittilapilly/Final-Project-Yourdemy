// App.js
import React  from "react";

import Header from "./components/header";
import CoursePage from "./components/coursePage";
import Footer from "./components/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import Feedback from "./components/feedback";
import FeaturedCourses from "./components/featuredCourses";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  let isAuthenticated = sessionStorage.getItem("isAuthenticated");

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={() => <FeaturedCourses />}></Route>
          <Route path="/home" Component={() => <FeaturedCourses />} />
          <Route path="/login" Component={() => <Login />}></Route>
          <Route path="/signup" Component={() => <Signup />}></Route>
          {isAuthenticated && (<Route
            path="/courses/:id"
            Component={()=><CoursePage/>}
          />)}
          {isAuthenticated && (<Route
            path="/feedback"
            Component={()=><Feedback/>}
          />)}
          {!isAuthenticated && (
            <Route exact path="/*" Component={() => <Login />}></Route>
          )}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
