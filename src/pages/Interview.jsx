import jsonData from '../data/questions.json'
import Navbar from '../components/Navbar'
import QuestionCard from '../components/QuestionCard'
import { useEffect, useState } from 'react' 

export default function Interview(){

    const { quiz } = jsonData

    const [qid, setQid] = useState(0)

    const currentQuestion = quiz[qid]
    const maxQid = quiz.length - 1

    //from quiz.length we can get the total number of quizzes available

    return(
        <>
            <Navbar qid={qid} setQid={setQid} maxQid={maxQid} />
            <QuestionCard currentQuestion={currentQuestion} />
        </>
    )
}