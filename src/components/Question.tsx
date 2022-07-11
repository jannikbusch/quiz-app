import {useContext, useEffect, useState} from "react";
import {QuestionContext} from "../context/QuestionContext";
import {append, equals, isNil, map} from "ramda";
import {shuffleArr} from "../utils/arrayUtils";
import "./Question.scss";
import {useSpring, animated} from "react-spring";

function buildAnswersArr(correctAnswer : string, answers : Array<string>) {
  return shuffleArr(append(correctAnswer, answers));
}

interface QuestionProps {
  showOverlay: boolean
  setShowOverlay: any
  setOverlayType: any
}

export function Question(props : QuestionProps) : JSX.Element {
  const {activeQuestion, checkAnswer, points} = useContext(QuestionContext);
  const [show, setShow] = useState<boolean>(true);
  const fadeIn = useSpring({ config: { duration: 1000 }, to: { opacity: 1 }, from: { opacity: 0 } })
  
  useEffect(() => {
    if(props.showOverlay) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [props.showOverlay])
  
  if(isNil(activeQuestion)) {
    return <main className={`question-area ${show ? "show" : "hide"}`}>
      <div className={"topic"}>&nbsp;</div>
      <div className={"question"}><span>
        {equals(points, 0) ?
          "Do lost all your points." :
          `You ${points > 100 ? "" : "only"} have ${points} points${points > 100 ? "." : "..."}`
        }
      </span></div>
      <div className={"answers"}>&nbsp;</div>
    </main>;
  }
  
  return <main className={`question-area ${show ? "show" : "hide"}`}>
    <div className={"topic"}>
      { activeQuestion.topic }
    </div>
    <div className={"question"}>
      <span>
        { activeQuestion.question }
      </span>
    </div>
    <div className={"answers"}>
      { map((answer : string) =>
          <animated.div style={fadeIn} className={"answer"} key={answer} onClick={() => {
            props.setOverlayType(checkAnswer(answer));
            props.setShowOverlay(true);
          }}>
            {answer}
          </animated.div>, buildAnswersArr(activeQuestion.correctAnswer, activeQuestion.wrongAnswers)) }
    </div>
  </main>;
}