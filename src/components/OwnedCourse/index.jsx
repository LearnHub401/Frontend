import { Card, Image, Text, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { addEnrolledCourse } from "../../store/actions";

const OwnedCourse = () => {
  const { course, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {course[0]?.owner_id === user?._id ?
        <>
        <h1>Owned Courses</h1>
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
            {/* edit course details
            add lesson */}
          </Button.Group>
        </> : user?.activeCourses?.includes(course[0]._id) ? <Navigate to='/' replace /> : <Navigate to='/' replace />
      }
    </>
  )
}

export default OwnedCourse;
