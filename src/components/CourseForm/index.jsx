import { Box, Group, TextInput, Textarea, Button } from "@mantine/core"
import { useForm } from "@mantine/form";
import { useEffect } from "react";
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
      courseName: '',
      description: '',
      imgUrl: '',
    },
    validate: {
      courseName: (value) => (value.length < 1 ? 'Required' : null),
      description: (value) => (value.length < 1 ? 'Required' : null),
    },
  });

  const handleSubmit = (values) => {
    if (state.course?.length < 1){
      dispatch(updateCourse(state.activeCourse._id, values));
    } else {
      dispatch(addCourse({...values, owner_id: state.user._id }, state.user.email))
    }
    navigate("/ownedCourse");
  }

  return (
    (isAuthenticated ?
    <>
      <Box  style={{ borderRadius: 10}} maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => {handleSubmit(values)})}>
          <TextInput
            label="Course Name"
            placeholder="Course Name"
            {...form.getInputProps('courseName')}
          />
          <Textarea
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
            <Button 
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="md"
                mt={40}
                type="submit">Submit
            </Button>
          </Group>
        </form>
      </Box>
      </>: <h3>Not Authenticated</h3>)
  )
}

export default CourseForm
