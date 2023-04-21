import { Link } from "react-router-dom";
import { Card, Grid, Image, Text, ScrollArea} from "@mantine/core";
import { useDispatch } from "react-redux";
import { filterCourse } from "../../store/actions";



const CourseCard = (props) => {
  const dispatch = useDispatch();

  return (
    <>
    <Grid.Col key={`course-${props.idx}`} md={6} lg={3} style={{marginTop: '2rem'}}>
      <Card
        shadow="sm"
        padding="xl"
        component={Link} to="/CourseLanding"
        onClick={() => dispatch(filterCourse(props.course))}
        style={{width: '92%'}}
      >
        <Card.Section>
          <Image
            src={`https://source.unsplash.com/random?${props.course.courseName}`}
            height={160}
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          {props.course.courseName}
        </Text>
        <ScrollArea 
        h={100} 
        type="always"
        >
        <Text mt="xs" color="dimmed" size="sm" style={{marginRight:'1rem'}}>
          {props.course.description}
        </Text>
        </ScrollArea>
      </Card>
    </Grid.Col>
    </>
  )
}

export default CourseCard
