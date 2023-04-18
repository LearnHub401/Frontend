import Headers from "./components/Header";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Course from "./components/Course";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
