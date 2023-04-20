import { Card, Image, Text, Button } from "@mantine/core";
import { useToggle } from '@mantine/hooks';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ModuleForm from "../ModuleForm";

const OwnedCourse = () => {
  const { activeCourse, user } = useSelector((state) => state);
  const [moduleToggle, setModuleToggle] = useToggle([false, true]);
  
  return (
      <>
        {activeCourse?.owner_id === user?._id ?
          <>
            <h1>Owned Courses</h1>
            <Card
              shadow="sm"
              padding="xl"
            >
              <Card.Section>
                <Image
                  src={`https://source.unsplash.com/random?${activeCourse.courseName}`}
                  height={160}
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="md">
                {activeCourse.courseName}
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                {activeCourse.description}
              </Text>
            </Card>
            {activeCourse.modules?.map((module) => {
              return (
                <Card>
                  <Text weight={500} size="lg" mt="md">
                    {module.name}
                  </Text>
                  <Text size="sm" mt="xs">
                    {module.lessonText}
                  </Text>
                  {module.questions?.map((question) => {
                    return (
                      <Card>
                        <Text>
                          <p>Question: {question.questionTxt}</p>
                          <p>Answer: {question.answer}</p>
                          <p>Answers: {question.answerArr.map(elem => <p>{elem}</p>)}</p>
                        </Text>
                      </Card>
                    )
                  })}
                  {/* {questionToggle? <p>Question Form</p> : <Button onClick={setQuestionToggle}>Add Question</Button>} */}
                </Card>
              )
            })}
            {moduleToggle ? <ModuleForm setModuleToggle={setModuleToggle} /> : <Button onClick={setModuleToggle}>Add Module</Button>}
          </> : user?.activeCourses?.includes(activeCourse._id) ? <Navigate to='/courseModule' replace /> : <Navigate to='/' replace />
        }
      </>
  )
}

export default OwnedCourse;
