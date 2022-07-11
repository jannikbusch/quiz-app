import {useContext} from "react";
import {QuestionContext} from "../../context/QuestionContext";
import { useSpring, animated } from 'react-spring'

export default function Wrong() {
  const {points} = useContext(QuestionContext);
  const animationProps = useSpring({ config: { duration: 200 }, to: { opacity: 1 }, from: { opacity: 0 } })
  const {activeQuestion} = useContext(QuestionContext);
  
  return <animated.div
    className={"overlay red"}
    style={animationProps}>
    <div>
      <h1>WRONG</h1>
      <p>The correct answer would have been "{activeQuestion.correctAnswer}".</p>
      <small>{ points } Points</small>
    </div>
  </animated.div>;
}