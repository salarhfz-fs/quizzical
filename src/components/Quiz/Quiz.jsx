import { useEffect, useState } from 'react'
import Question from '../Question'
import './Quiz.scss'

function Quiz(props) {
    const [isPlaying, setPlaying] = useState(true)
    const [questions, setQuestions] = useState(props?.data?.results)
    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect(() => {
        if (!isPlaying) {
            setCorrectAnswers(questions.filter(q => q.correct_answer === q.userAnswer)?.length)
        } else {
            setCorrectAnswers(0)
        }
    }, [isPlaying])

    function handleAnswer(question, answer) {
        setQuestions(prev => prev.map(q => q.question === question ? { ...q, userAnswer: answer } : q))
    }

    function togglePlaying() {
        setPlaying(prev => !prev)
    }

    return (
        <div className="quiz">
            <img alt='Top corner curvy image' src='/quiz-top-curve.svg' className='quiz__top-img' />
            <img alt='Bottom corner curvy image' src='quiz-bottom-curve.svg' className='quiz__bottom-img' />
            <main className="quiz__main">
                {questions.map(q => (<Question
                    key={q.question}
                    isPlaying={isPlaying}
                    onAnswer={handleAnswer}
                    {...q}
                />
                ))}
            </main>
            <section className="quiz__result">
                {isPlaying ? (
                    <button className="quiz__result__check" onClick={togglePlaying}>Check answers</button>
                ) : (
                    <>
                        <p className='quiz__result__score'>You scored {correctAnswers}/{questions.length} correct answers</p>
                        <button className='quiz__result__play-again' onClick={() => props.togglePage('home')}>Play again</button>
                    </>
                )}
            </section>
        </div>
    )
}

export default Quiz
