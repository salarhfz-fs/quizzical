import { useEffect, useState } from 'react'
import { shuffle } from '../../common/utils/arrays'
import './Question.scss'

function Question(props) {
    const [choices, setChoices] = useState([])
    const [selected, setSelected] = useState('')

    useEffect(() => {
        const allChoices = [...props.incorrect_answers, props.correct_answer]
        setChoices(shuffle(allChoices))
    }, [])


    function handleClick(answer) {
        if (!props.isPlaying) return
        setSelected(answer)
    }
    
    return (
        <div className="question">
            <h3 className='question__q'>{props.question}</h3>
            <section className="question__a">
                {choices?.map(choice => (
                    <button
                        key={choice}
                        onClick={() => handleClick(choice)}
                        className={`
                    question__a__item
                    ${props.isPlaying && selected === choice ? 'question__a__item--selected' : ''}
                    ${!props.isPlaying && props.correct_answer !== choice ? 'question__a__item--weak' : ''}
                    ${!props.isPlaying && props.correct_answer === choice ? 'question__a__item--correct' : ''}
                    ${!props.isPlaying && choice === selected && props.correct_answer !== selected ? 'question__a__item--incorrect' : ''}
                    `}>
                        {choice}
                    </button>
                ))}
            </section>
        </div>
    )
}

export default Question
