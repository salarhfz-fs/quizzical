import { useState } from 'react'
import Question from '../Question'
import './Quiz.scss'

function Quiz(props) {
    const [isPlaying, setPlaying] = useState(true)
    const [answers, setAnswers] = useState([])

    const { results: questions } = props?.data

    function togglePlaying() {
        setPlaying(prev => !prev)
    }

    return (
        <div className="quiz">
            <img alt='Top corner curvy image' src='/quiz-top-curve.svg' className='quiz__top-img' />
            <img alt='Bottom corner curvy image' src='quiz-bottom-curve.svg' className='quiz__bottom-img' />
            <main className="quiz__main">
                {questions.map((question => <Question key={question.question} isPlaying={isPlaying} {...question} />))}
            </main>
            <section className="quiz__result">
                {isPlaying ? (
                    <button className="quiz__result__check" onClick={togglePlaying}>Check answers</button>
                ) : (
                    <>
                        <p className='quiz__result__score'>You scored 3/5 correct answers</p>
                        <button className='quiz__result__play-again' onClick={() => props.togglePage('home')}>Play again</button>
                    </>
                )}
            </section>
        </div>
    )
}

export default Quiz
