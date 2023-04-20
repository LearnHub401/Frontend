import { Link } from "react-router-dom";
import { Tabs } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { filterCourse, getCourses } from "../../store/actions";
import { useEffect } from "react";

const LandingPage = () => {
  const { course } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
      <Tabs defaultValue="courses" orientation="vertical">
        <Tabs.List>
          {
            course.map((course, idx) => {
              return (
                <Tabs.Tab
                  key={idx}
                  component={Link} to="/courselanding"
                  value={course.courseName}
                  onClick={() => dispatch(filterCourse(course._id))}
                >
                  {course.courseName}
                </Tabs.Tab>
              );
            })
          }
        </Tabs.List>
      </Tabs>
    </>
  )
}

export default LandingPage;
