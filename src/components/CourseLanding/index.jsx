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
                  src={activeCourse?.img_Url || `https://source.unsplash.com/random?${activeCourse.courseName}`}
                  height={800}
                />
              </Card.Section>

              <Text weight={500} size={60} mt="md">
                {activeCourse.courseName}
              </Text>

              <Text mt="xs" color="dimmed" size={30}>
                {activeCourse.description}
              </Text>
            </Card>
            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size={69}
              mt={40}
              radius={16}
              sx={{ paddingLeft: '4rem', paddingRight: '4rem'}}
              onClick={() => dispatch(addEnrolledCourse(activeCourse._id, user.email))}>Start</Button>
          </>
      }
    </>
  )
}

export default CourseLanding;
