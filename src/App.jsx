import { useState } from 'react'
import './App.css'
import { Card } from "./Card"
import { NavBar } from './NavBar'

function App() {
  const questions = [
    {text: "O que é JSX?", answer: "Uma extensão de linguagem JavaScript."},
    {text: "O que é React?", answer: "É uma biblioteca JavaScript para construção de interface gráfica."},
    {text: "O que é um componente?", answer: "Uma função ou classe que retorna um elemento React."}
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answerIsVisible, setAnswerIsVisible] = useState(false)

  const currentQuestion = questions[currentIndex]

  const lastIndex = questions.length - 1

  return (
    <>
      <Card text={answerIsVisible ? currentQuestion.answer : currentQuestion.text}/>
      <NavBar 
        setCurrentIndex={setCurrentIndex} 
        currentIndex={currentIndex} 
        lastIndex={lastIndex}
        answerIsVisible={answerIsVisible}
        setAnswerIsVisible={setAnswerIsVisible} />
    </>
  )
}

export default App
