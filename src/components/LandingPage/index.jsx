import { Link } from "react-router-dom";
import { Tabs } from "@mantine/core";

const LandingPage = () => {

  return(
    <>
      <h1>Landing Page</h1>
      <Link to="/courses">Explore Courses</Link>

      <Tabs defaultValue="courses" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="Arrays">Arrays</Tabs.Tab>
        <Tabs.Tab value="Trees">Trees</Tabs.Tab>
        <Tabs.Tab value="Stack">Stack</Tabs.Tab>
        <Tabs.Tab value="Queue">Queue</Tabs.Tab>
        <Tabs.Tab value="Redux">Redux</Tabs.Tab>
        <Tabs.Tab value="SQL">SQL</Tabs.Tab>
        <Tabs.Tab value="etc">etc...</Tabs.Tab>
      </Tabs.List>
      </Tabs>
    </>
  )
}

export default LandingPage;
