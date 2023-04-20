import { Box, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../store/actions";

const ModuleForm = (props) => {
  const dispatch = useDispatch();
  const { course } = useSelector(((state) => state));

  const form = useForm({
    initialValues: {
      name: '',
      lessonText: '',
      imgUrl: '',
      questionTxt: '',
      answerArr: '',
      answer: '',
    },
    validate: {
      name: (value) => (value.length < 1 ? 'Required' : null),
      lessonText: (value) => (value.length < 1 ? 'Required' : null),
    },
  });

  return (
    <>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => { dispatch(updateCourse(course[0]._id, {...course[0], modules: [...course[0].modules, {name: values.name, lessonText: values.lessonText, imgUrl: values.imgUrl, questions: [{questionTxt: values.questionTxt, answer: values.answer, answerArr: values.answerArr.split(' ')}]}]}))})}>
          <TextInput
            label="Module Name"
            placeholder="Module Name"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Lesson Text"
            placeholder="Lesson"
            {...form.getInputProps('lessonText')}
          />
          <TextInput
            label="Image"
            placeholder="Image URL"
            {...form.getInputProps('imgUrl')}
          />
          <TextInput
            label="Question"
            placeholder="question"
            {...form.getInputProps('questionTxt')}
          />
          <TextInput
            label="Answers"
            placeholder="List of Answers"
            {...form.getInputProps('answerArr')}
          />
          <TextInput
            label="Correct Answer"
            placeholder="Correct Answer"
            {...form.getInputProps('answer')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  )
}

export default ModuleForm
