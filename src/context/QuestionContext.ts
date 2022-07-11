import {createContext, useContext, useEffect, useState} from "react";
import {equals, find, prepend, repeat} from "ramda";
import {QuestionI, QuestionStoreI} from "../types/questionTypes";
import questionsJson from "../static/questions.json";

export enum questionIs {empty , notAnswered , incorrect, correct};

export const defaultQuestion : QuestionI = {
  topic: "",
  question: "",
  correctAnswer: "",
  wrongAnswers: [
    "", "", ""
  ]
}

export const defaultQuestionsArr : Array<QuestionI> = [
  defaultQuestion
];

export const defaultQuestionStore : QuestionStoreI = {
  activeQuestion: defaultQuestion,
  questionBefore: defaultQuestion,
  questionAfter: defaultQuestion,
  correctQuestions: [],
  questionNo: 0,
  checkAnswer: (answer : string) => 0,
  nextQuestion: () => {},
  points: 0
};

export const QuestionContext = createContext(defaultQuestionStore);

async function getQuestionsArr() : Promise<any> {
  return Promise.resolve(questionsJson);
}

function buildCorrectQuestionsArr(len : number) : Array<number> {
  return repeat(questionIs.empty, len);
}


export function useQuestionStore() : QuestionStoreI {
  const [questionsArr, setQuestionsArr] = useState(defaultQuestionsArr);
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [correctQuestions, setCorrectQuestions] = useState<Array<number>>([questionIs.empty]);
  const [points, setPoints] = useState<number>(100);
  
  useEffect(() => {
    getQuestionsArr().then(arr => {
      setQuestionsArr(prepend(defaultQuestion)(arr));
      setCorrectQuestions(buildCorrectQuestionsArr(arr.length));
    });
  }, []);
  
  function addPoints(amount: number) {
    if((points + amount) < 0) {
      setPoints(0);
    } else {
      setPoints(points + amount)
    }
  }
  
  function nextQuestion() {
    setQuestionNo(questionNo + 1);
  }
  
  function checkAnswer(answer : string) {
    if(!equals(correctQuestions[questionNo-1])(questionIs.empty)) {
      return correctQuestions[questionNo-1];
    }
    let newCorrectQuestionsArr = correctQuestions;
    if(equals(answer)(questionsArr[questionNo].correctAnswer)) {
      newCorrectQuestionsArr[questionNo-1] = questionIs.correct;
      addPoints(10);
    } else if(find((incorrectAnswer : string) => equals(answer, incorrectAnswer), questionsArr[questionNo].wrongAnswers)) {
      newCorrectQuestionsArr[questionNo-1] = questionIs.incorrect;
      addPoints(-25);
    } else {
      newCorrectQuestionsArr[questionNo-1] = questionIs.notAnswered;
      addPoints(-15);
    }
    setCorrectQuestions(newCorrectQuestionsArr);
    return newCorrectQuestionsArr[questionNo-1];
  }
  
  return {
    activeQuestion: questionsArr[questionNo],
    questionBefore: questionsArr[questionNo - 1],
    questionAfter: questionsArr[questionNo + 1],
    correctQuestions,
    questionNo,
    checkAnswer,
    nextQuestion,
    points
  };
}