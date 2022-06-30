import QuestionAnswer from "../QuestionAnswer/QuestionAnswer"
import '../Faq/Faq.css'
import { useState } from "react"



export default function Faq () {
    const datas = [
        {   
            id:"bjsq",
            question : "How many team members can I invite?",
            answer : "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        },
        {
            id:"vqsv",
            question : "What is the maximum file upload size?",
            answer : "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            id:"gosdq",
            question : "How do I reset my password?",
            answer : "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        },
        {
            id:"hvgsqdvj",
            question : "Can I cancel my subscription?",
            answer : "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
            id:"ojsdqfg",
            question : "Do you provide additional support?",
            answer : "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        },
    ]
    

    const listOfQuestionAnswer = datas.map(data => {
        return <QuestionAnswer {...data}/>
    })

    return (
        <div className="Faq">
            <h1 className="FaqHeading">FAQ</h1>
            {listOfQuestionAnswer}

        </div>
    )
}
