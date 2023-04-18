import { Card, Grid, Image, Tabs, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CourseList = () => {
  const { course } = useSelector((state) => state)

  return (
    <>
      {/* <h2>Course: {course.courseName}</h2> */}
      {/* we will need to map through courses and make a Tabs.Tab for each course 'navigate' is how to use this with react router*/}
      <Tabs defaultValue="courses" orientation="vertical">
        <Tabs.List>
          {
            course.map((lesson, idx) => (
              <Tabs.Tab key={`cousre-${idx}`} value={lesson.courseName}>{lesson.courseName}</Tabs.Tab>
            ))
          }
        </Tabs.List>
      </Tabs>
      <Grid>

        {
          course.map((lesson, idx) => {
            let img = `https://source.unsplash.com/random?${lesson.courseName}`;
            return (
            <Grid.Col key={`cousre-${idx}`} md={6} lg={3}>
              <Card
                shadow="sm"
                padding="xl"
                component={Link} to="/"
                target="_blank"
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
