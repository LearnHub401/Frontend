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
          <Card
            shadow="lg"
            padding="xl"
          >
            <Card.Section>
              <Image
                src={activeCourse?.imgUrl || `https://source.unsplash.com/random?${activeCourse.courseName}`}
                height={800}
              />
            </Card.Section>

            <Text weight={500} size={60} mt="md">
              {activeCourse.courseName}
            </Text>

            <Text mt="xs" color="dimmed" size={30}>
              {activeCourse.description}
            </Text>
          </Card>
          {activeCourse.modules?.map((module) => {
            return (
              <Card shadow="sm" radius="md" padding="lg" withBorder>
                <Text size={25} fw={500} weight={500} mt="md">
                  {module.name}
                </Text>
                <Text size={22} mt="xs">
                  Lesson: {module.lessonText}
                </Text>
                {module.questions?.map((question) => {
                  return (
                    <Card>
                      <Text size={18}>
                        Question: {question.questionTxt}
                      </Text>
                      <Text>
                        Answer: {question.answer}
                      </Text>
                      <Text>
                        Answers: {question.answerArr.map(elem => <>{elem},  </>)}
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
