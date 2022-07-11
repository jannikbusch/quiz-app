import { formatLeadingZero } from "../utils/numberUtils";
import {useContext} from "react";
import {QuestionContext} from "../context/QuestionContext";
import "./QuestionNo.scss";

export function QuestionNo() : JSX.Element {
    const {questionNo} = useContext(QuestionContext);
    return <header className="pageNo-area">
        <span className={"pageNo"}>
            { formatLeadingZero(questionNo, 2) }
        </span>
    </header>;
}