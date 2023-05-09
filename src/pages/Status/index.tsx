import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"

import "./styles.css"

import { Tweet } from "../../components/Tweet"
import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "Meu primeiro Tweet",
    "Meu segundo Tweet",
    "Meu terceiro Tweet",
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([...answers, newAnswer])
    setNewAnswer("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([...answers, newAnswer])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia autem libero, veritatis mollitia qui nisi eveniet cumque rerum atque, unde nobis, consectetur illo assumenda. Amet totam consequuntur repudiandae cum?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Elias-Neto.png"
            alt="Foto de Perfil de Elias Neto"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer, index) => (
        <Tweet key={index} content={answer} />
      ))}
    </main>
  )
}
