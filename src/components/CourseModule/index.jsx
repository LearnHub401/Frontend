import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Radio, Text, Button, Badge, Modal, Group } from "@mantine/core";
import React, { useState } from 'react';
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";


const CourseModule = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { course } = useSelector((state) => state);
  const [opened, { open, close }] = useDisclosure(false);

  let answerResult = null;

  const module = course[0].modules[currentModule];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerQuestion = () => {
    answerResult = module.questions[currentQuestion].answer === selectedOption;
    if (answerResult) {
      if (currentQuestion === (module.questions.length - 1)) {
        if (currentModule === (course[0].modules.length - 1)) {
          console.log('course complete');
          open();
          // set active course complete
          // user.activeCourses[find courseID] {courseID, index: currentModule, complete: true}
        }
        else {
          setCurrentModule(currentModule + 1);
          setCurrentQuestion(0);
          answerResult = null;
          setSelectedOption(null);
          // update  user.activeCourses[find courseID] {courseID, index: currentModule, complete: false}
        }
      }
      else {
        setCurrentQuestion(currentQuestion + 1);
        answerResult = null;
        setSelectedOption(null);
      }
    };
  }

  return (
    <>
      <Card>
        <Card.Section>
          <Text>
            {`${course[0].courseName}: ${module.name}`}
          </Text>
          <Image
            src={module.Img}
            height={160}
          />
          <Text mt="xs" color="dimmed" size="sm">
            {module.lessonText}
          </Text>
        </Card.Section>

        <Card.Section>
          {selectedOption && (module.questions[currentQuestion].answer === selectedOption ? <Badge color="green">CORRECT</Badge> : <Badge color="red">INCORRECT</Badge>)}
          <Text weight={500} size="lg" mt="md">
            {module.questions[currentQuestion].questionTxt}
          </Text>
          {
            module.questions[currentQuestion].answerArr.map((answer, index) => (
              <Radio
                key={index}
                value={answer}
                checked={selectedOption === answer}
                onChange={() => handleOptionSelect(answer)}
                label={answer}
                style={{ marginTop: '1rem' }}
              />
            ))
          }
          <Button
            onClick={() => handleAnswerQuestion()}
            fullWidth
            size="xl"
            disabled={!selectedOption}
            style={{ marginTop: '1rem' }}
          >
            Submit
          </Button>
        </Card.Section>
      </Card>

      <Modal opened={opened} onClose={close} centered  >
          <h4>Course Complete!</h4>
          <Button radius="lg" component={Link} to="/">HOME</Button>
      </Modal>
    </>
  )
}

export default CourseModule;