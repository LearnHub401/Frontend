import { Card, Image, Text, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { addEnrolledCourse } from "../../store/actions";

const CourseLanding = () => {
  const { course, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {user && user.activeCourses.includes(course[0]._id) ? <Navigate to='/' replace /> :
        <>
          <Card
            shadow="sm"
            padding="xl"
          >
            <Card.Section>
              <Image
                src={`https://source.unsplash.com/random?${course[0].courseName}`}
                height={160}
              />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
              {course[0].courseName}
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              {course[0].description}
            </Text>
          </Card>
          <Button.Group>
            <Button variant="default" onClick={() => dispatch(addEnrolledCourse(course[0]._id, user.email))}>Add Course</Button>
            <Button variant="default" content={Link}to="/">Start Course</Button>
          </Button.Group>
        </>
      }
    </>
  )
}

export default CourseLanding;
