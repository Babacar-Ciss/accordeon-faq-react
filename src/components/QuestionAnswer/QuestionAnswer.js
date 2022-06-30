import "../QuestionAnswer/QuestionAnswer.css";

export default function QuestionAnswer (props) {
    
    return (
        <div className="QuestionAnswer" onClick={props.clicked}>
            <p className="Question"> {props.question}</p>
                <div className="Arrow" >  </div>
            <p className="Answer" isShown = {props.showAnswer}>{props.answer}</p>
        <div class="Line-bottom" ></div>
        </div>
    )

}