import { QuestionNo } from './components/QuestionNo';
import './App.scss';
import {QuestionContext, useQuestionStore} from "./context/QuestionContext";
import {Question} from "./components/Question";
import {addIndex, equals, forEach, isNil, map} from "ramda";
import {UserNameInput} from "./components/UserNameInput";
import {useUserStore, UserContext} from "./context/UserContext";
import {useState} from "react";
import {Overlay, overlayMap} from "./components/overlays/Overlay";

function App() {
  const userStore = useUserStore();
  const questionStore = useQuestionStore();
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [overlayType, setOverlayType] = useState<number>(0);
  const mapIndexed = addIndex(map);
  
  return (
    <UserContext.Provider value={userStore}>
      <QuestionContext.Provider value={questionStore}>
        <Overlay show={showOverlay} setShow={setShowOverlay}>
          {overlayMap.get(overlayType)}
        </Overlay>
        <div className="App">
          { !isNil(questionStore.activeQuestion) ? <QuestionNo/> : <></>}
          { equals(questionStore.questionNo, 0) ?
            <UserNameInput /> :
            <Question
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
              setOverlayType={setOverlayType}/> }
        </div>
        <div className={"pagination"}>
          <div className={"points"}>
            {mapIndexed((questionIs, i) =>
              <div className={`point color-${equals(questionIs, 0) && i === questionStore.questionNo-1 ? "4" : questionIs}`} />, questionStore.correctQuestions)}
          </div>
        </div>
      </QuestionContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
