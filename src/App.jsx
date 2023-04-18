import Headers from "./components/Header";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Course from "./components/Course";
import CourseList from "./components/CourseList";
import CourseLanding from "./components/CourseLanding";
import { withAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider} from '@mantine/core';


function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (ColorScheme) =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={
        {
          colorScheme,
          colors: {
            dark: [
              '#31B073',
              '#194D34',
              '#091C13',
              '#B2D1A7',
              '#F5DDA2',
              '#F7F1D0',
              '#9C676F',
              '#29181B',
              '#0c0d21',
              '#01010a',
            ],
          }
        }} withGlobalStyles withNormalizeCSS>
        <>
          <BrowserRouter>
            <Headers />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courses" element={<Course />} />
            </Routes>
          </BrowserRouter>
        </>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default withAuth0(App);
