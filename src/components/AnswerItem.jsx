// import { useState, useEffect } from 'react'


// export default function AnswerItem({answer}){

//     const [isChecked, setIsChecked] = useState(false)

//     const handleSelectAnswer = () => {
//         setIsChecked(true)
//     }

//     return(
//         <div onClick={handleSelectAnswer} className={`answer-item ${isChecked ? 'bg-[#46a997] pointer-events-none' : ''}`}>
//             <div className='relative' >
//                 <input 
//                     type="radio" 
//                     name="radio"
//                     checked={isChecked}
//                 />
//                 <span className="checkmark"></span>
//             </div>
//             <p className={`${isChecked ? 'text-white font-medium' : ''}`} >{answer}</p>
//         </div>
//     )
// }
import React, { useState } from 'react';

export default function AnswerItem({ answer, onAnswerSelect }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSelectAnswer = () => {
    onAnswerSelect(); // Notify the parent component that this answer is selected
    setIsChecked(true);
  };

  return (
    <div
      onClick={handleSelectAnswer}
      className={`answer-item ${isChecked ? 'bg-[#46a997] pointer-events-none' : ''}`}
    >
      <div className='relative'>
        <input
          type="radio"
          name="radio"
          checked={isChecked}
        />
        <span className="checkmark"></span>
      </div>
      <p className={`${isChecked ? 'text-white font-medium' : ''}`}>{answer}</p>
    </div>
  );
}
