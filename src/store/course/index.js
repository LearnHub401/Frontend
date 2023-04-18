let initialState = {
    courseName: 'Data structures',
    owner: 'testid_martin',
    _id: 'uid',
    description: 'Learn Data',
    activeIdx: 0, // in user for saved courses
    modules: [
      {
        name: 'Array',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://placekitten.com/200/300',
        question: 
          {
            questionText: 'Amazingly Awesome Arrays',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
      },
      {
        name: 'String',
        lessonText: 'Silly string is extremely flammable; avoid birthday candles',
        lessonImg: 'https://placekitten.com/200/300',
        question: 
          {
            questionText: 'Sandy Silly String',
            answer: '3',
            answerArr: ['1', '2', '3', '4'],
          },
      },
      {
        name: 'Object',
        lessonText: 'Treat people like objects, they are NPCs',
        lessonImg: 'https://placekitten.com/200/300',
        question: 
          {
            questionText: 'Orange Obtuse Objects',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
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
