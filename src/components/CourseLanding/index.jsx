import { Card, Image, Text, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addEnrolledCourse } from "../../store/actions";

const CourseLanding = () => {
  const { activeCourse, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {activeCourse?.owner_id === user?._id ? <Navigate to='/ownedCourse' replace /> :
        user?.activeCourses?.includes(activeCourse._id) ? <Navigate to='/courseModule' replace /> :
          <>
            <Card
              shadow="sm"
              padding="xl"
            >
              <Card.Section>
                <Image
                  src={`https://source.unsplash.com/random?${activeCourse.courseName}`}
                  height={160}
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="md">
                {activeCourse.courseName}
              </Text>
            <Text mt="xs" color="dimmed" size="sm">
              {activeCourse.description}
            </Text>
          </Card>
          <Button.Group>
            <Button variant="default" onClick={() => dispatch(addEnrolledCourse(activeCourse._id, user.email))}>Start</Button>
            {/* <Button variant="default" content={Link} to="/coursemodule">Start Course</Button> */}
          </Button.Group>
        </>
      }
    </>
  )
}

export default CourseLanding;
