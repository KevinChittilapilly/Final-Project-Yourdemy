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
          <Route
            path="/courses/:id"
            Component={()=><CoursePage/>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
