import { Link } from "react-router-dom";
import { Card, Image, Text, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { addActiveCourse } from "../../store/actions";

const CourseLanding = () => {
  const { course, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const lesson = course.activeCourse;

  const handleAddCourse = () => {
    if (user._id) {
      dispatch(
        addActiveCourse({
          courseId: lesson._id,
          complete: false
        })
      );
    }
  };

  return (
    <>
      <Card
        shadow="sm"
        padding="xl"
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
      <Button.Group>
        <Button
          variant="default"
          onClick={() => handleAddCourse()}
        >
          Add Course
        </Button>
        <Button
          variant="default"
          component={Link} to="/Module"
          onClick={() => handleAddCourse()}
        >
          Start Course
        </Button>
      </Button.Group>
    </>
  )
}

export default CourseLanding;
