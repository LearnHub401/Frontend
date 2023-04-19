import { Card, Text, Group, Grid } from "@mantine/core";
import AuthButtons from "../AuthButton";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import CourseCard from "../CourseCard";
import { useEffect } from "react";
import { getCourses, getUser } from "../../store/actions";


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
    (
      isAuthenticated ?  
      <>
        <Card shadow="md" padding="lg" radius="md" style={{width: '20%', height: '20%' }} withBorder>
          <Text>{state.user.userName}</Text>
          <Text>{state.user.email}</Text>
          <Group>
            <AuthButtons/>
          </Group>
        </Card>
        <Grid>
          {
            state?.user?.activeCourses?.length? 
            state.user.activeCourses.map((courseId, idx) => {
              let temp = state.course.filter((item) => item._id === courseId);
              if(temp.length){
                return <CourseCard course={temp[0]} idx={idx} />
              }
              return <></>
            }) : <h3>You're not enrolled in any classes</h3>
          }
          </Grid>
      </> : <AuthButtons />
    )
  )
}

export default Profile;
