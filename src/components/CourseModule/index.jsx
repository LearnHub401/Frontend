import { useSelector } from "react-redux";
import { Card, Image, Radio, Text, Button, Badge, Modal } from "@mantine/core";
import React, { useEffect, useState } from 'react';
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

  const handleRestartCourse = () => {
    setSelectedOption(null);
    setCurrentModule(0);
    setCurrentQuestion(0);
  };

  const handleAnswerQuestion = () => {
    answerResult = module.questions[currentQuestion].answer === selectedOption;
    if (answerResult) {
      if (currentQuestion === (module.questions.length - 1)) {
        if (currentModule === (course[0].modules.length - 1)) {
          open();
          setCurrentModule('complete');
          // STRETuser.activeCourses[find courseID] {courseID, index: currentModule, complete: true}
        }
        else {
          setCurrentModule(currentModule + 1);
          setCurrentQuestion(0);
          setSelectedOption(null);
          answerResult = null;
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

  useEffect(() => {
    console.log(course[0]._id);
    // const { storedCurrentModule, storedCurrentQuestion} = JSON.parse(localStorage.getItem('courseProgress'));
    // if (course) {
    //   setCurrentModule(storedCurrentModule);
    //   setCurrentQuestion(storedCurrentQuestion);
    // }
  }, []);

  return (
    <>
      <Card>
        <Card.Section>
          <Text>
            {`${course[0].courseName}: ${module?.name || 'complete'}`}
          </Text>
          <Image
            src={module?.name || 'https://source.unsplash.com/random?complete'}
            height={160}
          />
          <Text mt="xs" color="dimmed" size="sm">
            {module?.name || 'Actually... your done with this course.'}
          </Text>
        </Card.Section>

        <Card.Section>
          {selectedOption && (module?.questions[currentQuestion].answer === selectedOption ? <Badge color="green">CORRECT</Badge> : <Badge color="red">INCORRECT</Badge>)}
          <Text weight={500} size="lg" mt="md">
            {module?.questions[currentQuestion].questionTxt || 'There are no more questions.'}
          </Text>
          {
            module?.questions[currentQuestion].answerArr.map((answer, index) => (
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
          { currentModule !== 'complete' ? <Button
            onClick={() => handleAnswerQuestion()}
            fullWidth
            size="xl"
            disabled={!selectedOption}
            style={{ marginTop: '1rem' }}
          >
            Submit
          </Button> : 
          <Button
          onClick={() => handleRestartCourse()}
          fullWidth
          size="xl"
          style={{ marginTop: '1rem' }}
        >
          Restart Course
        </Button>
           }
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