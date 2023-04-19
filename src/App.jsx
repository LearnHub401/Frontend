import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import CourseList from "./components/CourseList";
import CourseLanding from "./components/CourseLanding";
import Footer from "./components/Footer";
import About from "./components/About";

import { getCourses, getUser } from "./store/actions";
import { useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";

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
      dispatch(getCourses())
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
              <Route path="/courselanding" element={<CourseLanding />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
        </>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
