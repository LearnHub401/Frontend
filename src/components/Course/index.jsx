import { useSelector } from "react-redux";

const Course = () => {
  const { course } = useSelector((state) => state)

  return (
    <h2>Course: {course.courseName}</h2>
  )
}

export default Course
