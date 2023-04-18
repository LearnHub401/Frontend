import Headers from "./components/Header";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Course from "./components/Course";
import CourseList from "./components/CourseList";
import CourseLanding from "./components/CourseLanding";
import { withAuth0 } from '@auth0/auth0-react';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courselanding" element={<CourseLanding />} />
          {/* <Route path="/module" element={<Module />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuth0(App);
