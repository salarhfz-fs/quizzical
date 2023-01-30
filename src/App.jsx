import { useEffect, useState } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'

import './App.scss'
import useFetch from './hooks/useFetch'

function App() {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('currentPage') || 'home')
  const fetchResult = useFetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple')

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])

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
