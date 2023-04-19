import { Card, Image, Text, Button, Radio, Group } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

const Module = () => {

  const { course, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const lesson = course.activeCourse;

  let activeIdx = 0;
  const module = lesson.modules[activeIdx];

  const shuffleAnswerArray = (questionObj) => {
    const allAnswers = [questionObj.answer];
    allAnswers.push(...questionObj.answerArr);
    return allAnswers.sort(() => 0.5 - Math.random());
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    console.log(e.target.value, module.questions[0].answer);
    activeIdx++;
  }

  const shuffledAnswers = shuffleAnswerArray(module.questions[0]);
  console.log(module.questions, 'module', shuffledAnswers);

  const answerElements = shuffledAnswers.map(answer => (
    <Radio value={answer} label={answer} />
  ))

  return (
    <>
      <Card
        shadow="sm"
      >
        <Text weight={500} size="md" color="dimmed" mt="md">
          {lesson.courseName}
        </Text>
        <Text weight={500} size="lg" mt="md">
          {module.name}
        </Text>
        <Card.Section>
          <Image
            src={module.Img}
            height={160}
          />
        </Card.Section>
        <Text mt="xs" size="sm">
          {module.lessonText}
        </Text>
      </Card>

      <Radio.Group
        name={module.questions[0].questionTxt}
        label={module.questions[0].questionTxt}
        onchange={() => console.log(this.value, 'hey')}
      >
        <Group mt="xs">
          {answerElements}
        </Group>
        <Button for={module.questions[0].questionTxt}>
          Submit
        </Button>
      </Radio.Group>
    </>
  )
}

export default Module;
