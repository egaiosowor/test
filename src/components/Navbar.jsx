import Logo from '../assets/icons/logo.svg'


export default function Navbar({qid, setQid, maxQid}){

    const nextQuestion = () => {
        //move to the next question card if an answer has been provided
        setQid((qid) => {
            if (qid < maxQid) {
                return qid + 1;
            } else {
                return qid;
            }
        });
    }


    const endInterview = () => {
        console.log('Interview has ended')
    }

    return(
        <nav className='py-6 px-12 lg:px-20 flex items-center justify-between shadow' >
            <div>
                <img className="w-[130px]" src={Logo} alt="PRCO Logo" />
            </div>

            <div>
                {/* handle interview conclusion */}

                {
                    qid === maxQid ? (

                        <button onClick={endInterview} className='flex py-2 px-5 font-medium items-center  rounded text-white bg-[#216F66] hover:bg-[#46a997]' >
                            Submit
                        </button>
                    ):
                    (

                        <button onClick={nextQuestion} className='flex py-2 px-5 font-medium items-center  rounded text-white bg-[#216F66] hover:bg-[#46a997]' >
                            Next
                            <svg className='ml-2 mt-[2px]' width="11" height="12" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2707 9.26404L3.27089 16.2639C2.78707 16.7477 2.00474 16.7477 1.52607 16.2639L0.36286 15.1007C-0.120953 14.6169 -0.120953 13.8345 0.36286 13.3559L5.32452 8.39421L0.36286 3.43255C-0.120953 2.94873 -0.120953 2.1664 0.36286 1.68773L1.52092 0.514227C2.00474 0.0304138 2.78707 0.0304138 3.26574 0.514227L10.2656 7.51408C10.7546 7.99789 10.7546 8.78023 10.2707 9.26404Z" fill="white"/>
                            </svg>

                        </button>
                    )
                }
            </div>
        </nav>
    )
}