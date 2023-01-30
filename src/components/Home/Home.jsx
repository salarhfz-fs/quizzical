import './Home.scss'

function Home(props) {

    function onStart() {
        if (props.isLoading) return
        props.togglePage('quiz')
    }

    return (
        <div className="home">
            <img alt='Top corner curvy image' src='/home-top-curve.svg' className='home__top-img' />
            <img alt='Bottom corner curvy image' src='/home-bottom-curve.svg' className='home__bottom-img' />
            <main className="home__main">
                <h2 className='home__main__hero'>Quizzical</h2>
                <p className='home__main__desc'>Multi-topic multi-choice Quiz app with various difficulty levels</p>
                <button className="home__main__start" onClick={onStart}>
                    {props.isLoading ? 'Loading...' : 'Start quiz'}
                </button>
            </main>
        </div>
    )
}

export default Home
