import { Textarea, Box, Group, TextInput, Button, Stack, Text } from "@mantine/core"
import { useForm } from "@mantine/form";

import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../store/actions";

const ModuleForm = (props) => {
  const dispatch = useDispatch();
  const { activeCourse } = useSelector(((state) => state));

  const form = useForm({
    initialValues: {
      name: '',
      lessonText: '',
      img_Url: '',
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
          img_Url: values.img_Url,
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
          <Textarea
            label="Lesson Text"
            placeholder="Lesson"
            {...form.getInputProps('lessonText')}
          />
          <TextInput
            label="Image"
            placeholder="Image URL"
            {...form.getInputProps('img_Url')}
          />
          <TextInput
            label="Question"
            placeholder="question"
            {...form.getInputProps('questionTxt')}
          />
          <Stack align= 'start'>
            <Text>Answers:</Text>
          <TextInput 
            placeholder="1st answer"
            {...form.getInputProps('answer1')}
          />
          <TextInput 
            placeholder="2st answer"
            {...form.getInputProps('answer2')}
          />
          <TextInput 
            placeholder="3st answer"
            {...form.getInputProps('answer3')}
          />
          <TextInput 
            placeholder="4st answer"
            {...form.getInputProps('answer4')}
          />
          </Stack>
          <TextInput 
            label="Correct Answer"
            placeholder="Correct Answer"
            {...form.getInputProps('answer')}
          />
          <Group position="right" mt="md">
            <Button variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="md"
              mt={40} type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  )
}

export default ModuleForm
