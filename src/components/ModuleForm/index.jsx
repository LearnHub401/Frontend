import { Box, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form";
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../store/actions";

const ModuleForm = (props) => {
  const dispatch = useDispatch();
  const { activeCourse } = useSelector(((state) => state));

  const form = useForm({
    initialValues: {
      name: '',
      lessonText: '',
      imgUrl: '',
      questionTxt: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer: '',
    },
    validate: {
      name: (value) => (value.length < 1 ? 'Required' : null),
      lessonText: (value) => (value.length < 1 ? 'Required' : null),
    },
  });

  const handleSubmit = (values) => {
    dispatch(updateCourse(activeCourse._id,
      {
        ...activeCourse, modules: [...activeCourse.modules, {
          name: values.name,
          lessonText: values.lessonText,
          imgUrl: values.imgUrl,
          questions: [{
            questionTxt: values.questionTxt,
            answer: values.answer,
            answerArr: [values.answer1, values.answer2, values.answer3, values.answer4]
          }]
        }]
      }
    ))
    props.setModuleToggle();
  }
  return (
    <>
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
            placeholder="1st answer"
            {...form.getInputProps('answer1')}
          />
          <TextInput
            label="Answers"
            placeholder="2st answer"
            {...form.getInputProps('answer2')}
          />
          <TextInput
            label="Answers"
            placeholder="3st answer"
            {...form.getInputProps('answer3')}
          />
          <TextInput
            label="Answers"
            placeholder="4st answer"
            {...form.getInputProps('answer4')}
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
