import { Card, Grid, Image, Text } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../store/actions";
import { Link } from "react-router-dom";
import { setActiveCourse } from "../../store/actions";
import { useEffect } from "react";

const CourseList = () => {
  const { course } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
      <Grid>

        {
          course.map((lesson, idx) => {
            return (
            <Grid.Col key={`course-${idx}`} md={6} lg={3}>
              <Card
                shadow="sm"
                padding="xl"
                component={Link} to="/CourseLanding"
                onClick={() => dispatch(setActiveCourse(lesson))}
              >
                <Card.Section>
                  <Image
                    src={`https://source.unsplash.com/random?${lesson.courseName}`}
                    height={160}
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  {lesson.courseName}
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  {lesson.description}
                </Text>
              </Card>
            </Grid.Col>
            );
          })
        }

      </Grid>
    </>
  )
}

export default CourseList;
