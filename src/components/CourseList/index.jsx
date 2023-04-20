import { Center, Grid, Pagination } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../store/actions";

import { useEffect, useState } from "react";
import CourseCard from "../CourseCard";
import './styles.scss'

const CourseList = () => {
  const { course } = useSelector((state) => state)
  const dispatch = useDispatch();
  const [activePage, setPage] = useState(1);

  const amountToDisplay = 8;

  const courseToRender = course;
  const listStart = amountToDisplay * (activePage - 1);
  const listEnd = listStart + amountToDisplay;
  const pageCount = Math.ceil(courseToRender.length / amountToDisplay);
  const displayCourse = courseToRender.slice(listStart, listEnd);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
      <h2>Courses</h2>
      <Grid style={{ marginTop: '1rem', marginBottom: '2rem', marginLeft: '3rem', marginRight:'0.5rem'}} >

        {
          displayCourse.map((course, idx) => {
            return (
              <CourseCard key={idx} course={course} idx={idx}/>
            );
          })
        }
        <Grid.Col>
          <Center>
            <Pagination value={activePage} onChange={setPage} total={pageCount} style={{marginTop: '1rem'}}/>
          </Center>
        </Grid.Col>

      </Grid>
    </>
  )
}

export default CourseList;
