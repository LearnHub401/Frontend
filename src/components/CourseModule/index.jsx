import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Radio, Text, Button } from "@mantine/core";
import React, { useState } from 'react';


const Module = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { course, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const module = course[0].modules[currentModule];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerQuestion = () => {
    if (module.questions[currentQuestion].answer === selectedOption) {
      if (currentQuestion === (module.questions.length - 1)) {
        if (currentModule === (course[0].modules.length - 1)) {
          console.log('course complete');
          // set active course complete
          // user.activeCourses[find courseID] {courseID, index: currentModule, complete: true}
        } else {
          setCurrentModule(currentModule + 1);
          // update  user.activeCourses[find courseID] {courseID, index: currentModule, complete: false}
          setCurrentQuestion(0);
        }
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  }

  return (
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
  )
}

export default Module;



// import React, { useState } from 'react';
// import { Card, Radio, Button, Text } from '@mantine/core';
// const QuizCard = ({ question, options }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };
//   return (
//     <Card>
//       <Text align="center" weight="bold">
//         {question}
//       </Text>
//       {options.map((option, index) => (
//         <Radio
//           key={index}
//           value={option}
//           checked={selectedOption === option}
//           onChange={() => handleOptionSelect(option)}
//           label={option}
//           style={{ marginTop: '1rem' }}
//         />
//       ))}
//       <Button fullWidth size="xl" disabled={!selectedOption} style={{ marginTop: '1rem' }}>
//         Submit
//       </Button>
//     </Card>
//   );
// };
// export default QuizCard;