import {QuestionContext, questionIs} from "../../context/QuestionContext";
import Correct from "./Correct";
import TooSlow from "./TooSlow";
import Wrong from "./Wrong";
import {useContext, useEffect, useRef} from "react";
import "./Overlays.scss";

export const overlayMap = new Map();
overlayMap.set(questionIs.correct, <Correct />);
overlayMap.set(questionIs.notAnswered, <TooSlow />);
overlayMap.set(questionIs.incorrect, <Wrong />);

interface OverlayProps {
  show: boolean,
  setShow: any,
  children: JSX.Element
}

export function Overlay(props: OverlayProps) {
  const { nextQuestion: moveForward } = useContext(QuestionContext);
  
  function nextQuestion() {
    moveForward();
    props.setShow(false);
  }
  
  if(props.show) {
    return <div
        className={"overlay-container"}
        onClick={() => nextQuestion()}>
      {props.children}
    </div>;
  }
  return <></>;
}