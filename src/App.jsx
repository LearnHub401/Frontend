/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import CourseList from "./components/CourseList";
import CourseLanding from "./components/CourseLanding";
import Footers from "./components/Footer";
import About from "./components/About";
import CourseModule from "./components/CourseModule";

import { getCourses, getUser } from "./store/actions";
import { useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import CourseForm from "./components/CourseForm";
import OwnedCourse from "./components/OwnedCourse";

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (ColorScheme) => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser({
        userName: user.name,
        email: user.email,
      }));
      // dispatch(getCourses())
    }
  }, [dispatch, isAuthenticated, user])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={
        {
          colorScheme,
          colors: {
            dark: [
              '#31B073',
              '#194D34',
              '#B2D1A7',
              '#091C13',
              '#F7F1D0',
              '#F5DDA2',
              '#9C676F',
              '#01010a',
              '#29181B',
              '#0c0d21',
            ],
            light: [
              '#F8EBF4', 
              '#D6E1E6', 
              '#4D294A', 
              '#EEECEB', 
              '#0E2D25', 
              '#0E4D25', 
              '#736989', 
              '#F5F5FA', 
              '#D7D6D9', 
              '#F0F0F6',
            ],
          },
          components: {
            Button: {
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '16px',
              textTransform: 'uppercase',
              fontWeight: 500,
            },
            appearances: {
              default: {
                backgroundColor: '#31B073',
                textColor: 'white',
                hover: {
                  backgroundColor: '#194D34',
                  textColor: 'white',
                },
              },
            },
          },

        }} withGlobalStyles withNormalizeCSS>
        <>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courseLanding" element={<CourseLanding />} />
              <Route path="/about" element={<About />} />
              <Route path="/ownedCourse" element={<OwnedCourse />} />
              <Route path="/courseForm" element={<CourseForm />} />
              <Route path="/courseModule" element={<CourseModule />} />
            </Routes>
            <Footers />
          </Router>
        </>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
