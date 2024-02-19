// import { useState, useEffect } from 'react'
// import AnswerItem from './AnswerItem'

// export default function QuestionCard({currentQuestion}){

//     const {id, question, answers} = currentQuestion


//     return(
//         <section className="py-6 px-12 lg:px-20 space-y-8" >
//             <div className='space-y-2' >
//                 <p>
//                     {question[0]}
//                 </p>
//                 <p className='font-bold' >{question[1]}</p>
//             </div>

//             <div className='space-y-4' >
//                 {
//                     answers.map((answer) => (
//                         <AnswerItem answer={answer} />
//                     ))
//                 }
//             </div>

//         </section>
//     )
// }
import React, { useState } from 'react';
import AnswerItem from './AnswerItem';

export default function QuestionCard({ currentQuestion }) {
  const { id, question, answers } = currentQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  return (
    <section className="py-6 px-12 lg:px-20 space-y-8">
      <div className='space-y-2'>
        <p>{question[0]}</p>
        <p className='font-bold'>{question[1]}</p>
      </div>

      <div className='space-y-4'>
        {answers.map((answer, index) => (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerSelect={() => handleAnswerSelect(index)}
            isChecked={selectedAnswer === index}
          />
        ))}
      </div>
    </section>
  );
}
