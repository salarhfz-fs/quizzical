import { useState } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import useFetch from './hooks/useFetch'

import './App.scss'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const fetchResult = useFetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple')

  function togglePage(page) {
    setCurrentPage(page)
  }

  return (
    <div className="container">
      {currentPage === 'home' ? <Home togglePage={togglePage} {...fetchResult} /> : <Quiz togglePage={togglePage} {...fetchResult} />}
    </div>

  )
}

export default App
