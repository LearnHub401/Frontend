import { Card, Text, Group, Grid, Center, Button } from "@mantine/core";
import { Image } from "react-bootstrap";
import AuthButtons from "../AuthButton";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import CourseCard from "../CourseCard";
import { useEffect } from "react";
import { getCourses, getUser } from "../../store/actions";
import './styles.scss'
import { Link } from "react-router-dom";


const Profile = () => {
  const state = useSelector(((state) => state));
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isAuthenticated){
      dispatch(getUser(user))
    }
    dispatch(getCourses());
  }, [dispatch, user, isAuthenticated]);

  return (
      (isAuthenticated ?  
      <>
        <Center>
        <Card shadow="md" padding="lg" radius="md" style={{width: '12%', height: '20%' }} withBorder>
        <Image variant="top" src={user.picture} alt={user.name} style={{width:'100%'}}/>
          <Text id="name">{state.user.userName}</Text>
          <Text id="email">{state.user.email}</Text>
          <Group>
            <AuthButtons id="authButton"/>
          </Group>
        </Card>
        </Center>
        <Center>
        <Grid>
          {
            state?.user?.activeCourses?.length? 
            state.user.activeCourses.map((courseId, idx) => {
              let temp = state.course.filter((item) => item._id === courseId);
              if(temp.length){
                return <CourseCard course={temp[0]} idx={idx} />
              }
              return <></>
            }) : <h3 id="noClasses">You're not enrolled in any classes</h3>
          }
          </Grid>
          </Center>
          <Center>
          <Grid>
          {
            state?.user?.courses?.length? 
            state.user.courses.map((courseId, idx) => {
              let temp = state.course.filter((item) => item._id === courseId);
              if(temp.length){
                return <CourseCard course={temp[0]} idx={idx} />
              }
              return <></>
            }) : <h3>You don't have any courses</h3>
          }
          </Grid>
          </Center>
          <Center>
          <Button variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="md"
              mt={40} component={Link} to="/courseForm">Create Course</Button>
            </Center>
      </> : <AuthButtons />)
  )
}

export default Profile;
