import { Box, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { addCourse, getUser, updateCourse } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const CourseForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(((state) => state));
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser(user))
    }
  }, [dispatch, user, isAuthenticated]);

  const form = useForm({
    initialValues: {
      courseName: state.course[0]?.courseName || '',
      description: state.course[0]?.description ||'',
      imgUrl: state.course[0]?.imgUrl || '',
    },
    validate: {
      courseName: (value) => (value.length < 1 ? 'Required' : null),
      description: (value) => (value.length < 1 ? 'Required' : null),
    },
  });

  const handleSubmit = (values) => {
    if (state.course?.length < 1){
      dispatch(updateCourse(state.course[0]._id, values));
    } else {
      dispatch(addCourse({...values, owner_id: state.user._id}, state.user.email))
    }
    console.log(state.user);
    navigate("/ownedCourse");
  }

  return (
    (isAuthenticated ?
    <>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => {handleSubmit(values)})}>
          <TextInput
            label="Course Name"
            placeholder="Course Name"
            {...form.getInputProps('courseName')}
          />
          <TextInput
            label="Description"
            placeholder="Course Description"
            {...form.getInputProps('description')}
          />
          <TextInput
            label="Image"
            placeholder="Image URL"
            {...form.getInputProps('imgUrl')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
      <h1>{JSON.stringify(state.user)}</h1>
      <h1>{JSON.stringify(state.course)}</h1>
      </>: <h3>Not Authenticated</h3>)
  )
}

export default CourseForm
