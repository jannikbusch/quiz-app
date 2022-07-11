import {useContext, useEffect, useState} from "react";
import {QuestionContext} from "../context/QuestionContext";
import {UserContext} from "../context/UserContext";
import {isEmpty} from "ramda";

export function UserNameInput() : JSX.Element {
  const { username, setUsername } = useContext(UserContext);
  const { nextQuestion } = useContext(QuestionContext);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if(error) {
      setTimeout(() => setError(false), 350);
    }
  }, [error])
  
  function submit(e: any) {
    e.preventDefault();
    if(isEmpty(username)) {
      setError(true);
    } else {
      nextQuestion();
    }
  }
  
  return <main className="question-area">
    <div className={"topic"}>
      &nbsp;
    </div>
    <div className={"question"}>
      <span>
        What is your name?
      </span>
    </div>
    <form className={`input ${error ? "error" : ""}`} onSubmit={e => submit(e)}>
      <input
        value={username}
        type={"text"}
        onChange={e => setUsername(e.target.value)}
        placeholder={"Enter your name..."}
          />
      <button onClick={e => submit(e)}>
        Continue &raquo;
      </button>
    </form>
  </main>;
}