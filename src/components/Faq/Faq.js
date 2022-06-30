import QuestionAnswer from "../QuestionAnswer/QuestionAnswer"
import '../Faq/Faq.css'
import { useState } from "react"



export default function Faq () {
    const datas = [
        {
            question : "How many team members can I invite?",
            answer : "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        },
        {
            question : "What is the maximum file upload size?",
            answer : "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            question : "How do I reset my password?",
            answer : "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        },
        {
            question : "Can I cancel my subscription?",
            answer : "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
            question : "Do you provide additional support?",
            answer : "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        },
    ]
    
    const [show, setShowAnswer] = useState(false);

    const handleClick = () => {
        console.log("click !")
    }


    const listOfQuestionAnswer = datas.map((data, index) => {
        return <QuestionAnswer question= {data.question}
                               answer = {data.answer} 
                               key = {index+1 }
                               clicked = {handleClick}
                               showAnswer = {true}
                />
    })

    return (
        <div className="Faq">
            <h1 className="FaqHeading">FAQ</h1>
            {listOfQuestionAnswer}

        </div>
    )
}