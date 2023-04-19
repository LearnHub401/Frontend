import { Grid } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../store/actions";

import { useEffect } from "react";
import CourseCard from "../CourseCard";

const CourseList = () => {
  const { course } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
      <Grid>

        {
          course.map((course, idx) => {
            return (
              <CourseCard key={idx} course={course} idx={idx}/>
            );
          })
        }

      </Grid>
    </>
  )
}

export default CourseList;
