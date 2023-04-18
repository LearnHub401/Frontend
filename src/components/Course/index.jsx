import { Tabs } from "@mantine/core";
import { useSelector } from "react-redux";

const Course = () => {
  const { course } = useSelector((state) => state)

  return (
    <>
    <h2>Course: {course.courseName}</h2>
    {/* we will need to map through courses and make a Tabs.Tab for each course 'navigate' is how to use this with react router*/}
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

export default Course;
