let initialState = {
    courseName: 'Data structures',
    owner: 'testid_martin',
    _id: 'uid',
    description: 'Learn Data',
    modules: [
      {
        name: 'Array',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'str',
        questions: [
          {
            questionTxt: 'Q1',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
        ],
      },
    ],
}

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Test':
      return state;
    default:
      return state;
  }
}

export default courseReducer;
