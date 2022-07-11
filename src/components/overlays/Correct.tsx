import { useSpring, animated } from 'react-spring'
import {useContext, useEffect, useState} from "react";
import {QuestionContext} from "../../context/QuestionContext";

export default function Correct() {
  const {points} = useContext(QuestionContext);
  
  const animationProps = useSpring({
    config: { duration: 200 },
    from: { opacity: 0 }, to: { opacity: 1 } })
  
  return <animated.div
      className={"overlay green"}
      style={animationProps}>
    <div>
      <h1>CORRECT</h1>
      <p>Your answer was correct.</p>
      <small>{ points } Points</small>
    </div>
  </animated.div>;
}