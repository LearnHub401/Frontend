import { useSelector } from "react-redux";

const Module = () => {
  const { course } = useSelector((state) => state);
  let activeIdx = 0;
  const module = course.modules[activeIdx];

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    console.log(e.target.value === module.question.answer);
    activeIdx++;
  }

  const answerOptions = module.question.answerArr.map(answer => (
    <button
    key={module.idx + answer}
      value={answer}
      onClick={(e) => handleSubmitAnswer(e)}
    >
      {answer}
    </button>
  ))

  return (
    <>
      <h1>{course.courseName}</h1>
      <h2>{module.name}</h2>
      <div className="lesson-wrapper">
        <img
          src={module.lessonImg}
          alt={`${module.name}`}
          // fixed size?
        />
        <p>
          {module.lessonText}
        </p>
      </div>
      <div className="quiz-wrapper">
        <h3>{module.question.questionText}</h3>
        {answerOptions}
      </div>
    </>
  )
}

export default Module;
