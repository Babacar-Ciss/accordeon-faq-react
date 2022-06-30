import "../QuestionAnswer/QuestionAnswer.css";
import { useState } from "react"

export default function QuestionAnswer (props) {
   
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="QuestionAnswer" onClick={() => {setShowAnswer(!showAnswer)}}>
             {
                !showAnswer ? <p className="Question"> {props.question}</p> 
                           : <p className="Question active"> {props.question}</p> 
            }
                  
            {
                showAnswer ? <div className="Arrow" > </div> 
                           : <div className="Arrow rotate"> </div>
            }

            {
                showAnswer ? <p className="Answer">{props.answer}</p>
                           : null          
            }

        <div class="Line-bottom" ></div>
        </div>
    )

}