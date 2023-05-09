import { FormEvent, KeyboardEvent, useState } from "react"

import "./styles.css"

import { Tweet } from "../../components/Tweet"
import { Header } from "../../components/Header"
import { Separator } from "../../components/Separator"

export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "Meu primeiro Tweet",
    "Meu segundo Tweet",
    "Meu terceiro Tweet",
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([...tweets, newTweet])
    setNewTweet("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([...tweets, newTweet])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Elias-Neto.png"
            alt="Foto de Perfil de Elias Neto"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))}
    </main>
  )
}
