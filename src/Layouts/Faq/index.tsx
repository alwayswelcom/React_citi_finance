
import QuestionList from './questionslist.json'

const FAQ = () => {
    return (
        <div>
            <div className='bg-faqpage w-full flex justify-center items-center bg-cover'>
                <div className='text-white font-bold text-6xl py-[150px]'>FAQ</div>
            </div>
            <div className='px-28 py-[89px]'>
                <div className='uppercase flex items-center justify-start font-bold text-darkblue text-[32px]'>HAVE ANY QUESTIONS?</div>
                <div className="  border-b-4 w-1/2 border-solid border-orange mb-12"></div>
                <div className='flex jutify-center items-center pb-28'>
                    <div className='px-[60px] w-1/2 pt-10'>
                        {QuestionList.map((item, idx) => (
                            <div className='text-left text-orange py-3 font-bold text-2xl'>
                                <a href={item.url}>{item.question}</a>
                            </div>
                        ))}
                    </div>
                    <div className='px-[60px] w-1/2 pt-10'>
                        {QuestionList.map((item, idx) => (
                            <div className='text-left text-orange py-3 font-bold text-2xl'>
                                <a href={item.url}>{item.question}</a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ