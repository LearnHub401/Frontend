let initialState = [
  {
    courseName: 'Bacon',
    owner: 'testid_martin',
    _id: '1',
    description: 'Bacon ipsum dolor amet brisket hamburger alcatra pork chop, frankfurter pancetta kielbasa chislic landjaeger corned beef. Jowl ham hock pork, short loin beef ribs flank tail ',
    modules: [
      {
        name: 'graphs',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://source.unsplash.com/random?graphs',
        questions: [
          {
            questionTxt: 'Q1',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
        ],
      },
    ],
  },
  {
    courseName: 'Data structures',
    owner: 'testid_marco',
    _id: '2',
    description: 'meatball cow kevin t-bone salami drumstick pig sirloin. Hamburger tenderloin kielbasa fatback pancetta jowl kevin short ribs. Pork chop beef shank ham hock brisket ribeye andouille',
    modules: [
      {
        name: 'Array',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://source.unsplash.com/random?$Data structures',
        questions: [
          {
            questionTxt: 'Q1',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
        ],
      },
    ],
  },
  {
    courseName: 'Data',
    owner: 'testid_martin',
    _id: '3',
    description: 'Bacon ipsum dolor amet brisket hamburger alcatra pork chop, frankfurter pancetta kielbasa chislic landjaeger corned beef. Jowl ham hock pork, short loin beef ribs flank tail ',
    modules: [
      {
        name: 'data',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://source.unsplash.com/random?data',
        questions: [
          {
            questionTxt: 'Q1',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
        ],
      },
    ],
  },
  {
    courseName: 'programming',
    owner: 'testid_marco',
    _id: '4',
    description: 'meatball cow kevin t-bone salami drumstick pig sirloin. Hamburger tenderloin kielbasa fatback pancetta jowl kevin short ribs. Pork chop beef shank ham hock brisket ribeye andouille',
    modules: [
      {
        name: 'Array',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://source.unsplash.com/random?$programming',
        questions: [
          {
            questionTxt: 'Q1',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
        ],
      },
    ],
  },
  {
    courseName: 'computers',
    owner: 'testid_martin',
    _id: '5',
    description: 'Bacon ipsum dolor amet brisket hamburger alcatra pork chop, frankfurter pancetta kielbasa chislic landjaeger corned beef. Jowl ham hock pork, short loin beef ribs flank tail ',
    modules: [
      {
        name: 'graphs',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://source.unsplash.com/random?computers',
        questions: [
          {
            questionTxt: 'Q1',
            answer: '2',
            answerArr: ['1', '2', '3', '4'],
          },
        ],
      },
    ],
  },
  {
    courseName: 'data science',
    owner: 'testid_marco',
    _id: '6',
    description: 'meatball cow kevin t-bone salami drumstick pig sirloin. Hamburger tenderloin kielbasa fatback pancetta jowl kevin short ribs. Pork chop beef shank ham hock brisket ribeye andouille',
    modules: [
      {
        name: 'Array',
        idx: '1',
        lessonText: 'Youre dumb if you dont know what an array is',
        lessonImg: 'https://source.unsplash.com/random?$data science',
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
];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Test':
      return state;
    default:
      return state;
  }
}

export default courseReducer;
