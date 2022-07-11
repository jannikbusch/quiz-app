export interface QuestionI {
  topic: string,
  question: string,
  correctAnswer: string,
  wrongAnswers: Array<string>
}

export interface QuestionStoreI {
  activeQuestion: QuestionI,
  questionBefore: QuestionI,
  questionAfter: QuestionI,
  correctQuestions: Array<number>,
  questionNo: number,
  checkAnswer: (answer : string) => number,
  nextQuestion: () => void,
  points: number
}
