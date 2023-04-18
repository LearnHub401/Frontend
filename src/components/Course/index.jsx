import { Tabs } from "@mantine/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../store/actions";

const Course = () => {
  const { course } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
    <h1>courses</h1>
      <Tabs defaultValue="courses" orientation="vertical">
        <Tabs.List>
          {course.map(((course) => {
            return (
              <Tabs.Tab value="Arrays">{course.courseName}</Tabs.Tab>
            )
          }))}
        </Tabs.List>
      </Tabs>
    </>
  )
}

export default Course;
