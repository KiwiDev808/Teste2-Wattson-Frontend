import React, { useEffect, useState } from 'react'
import './App.scss'
import { CommentFeed } from './components/CommentFeed'
import { CommentForm } from './components/CommentForm'
import { UserComment } from './components/types/Comment'

const mock: UserComment[] = [
  {
    description:
      'Um ninho de mafagafos Tinha sete mafagafinhos Quem desmafagafar o ninho de mafagafos Bom desmafagafador será',
    audio: 'http://spoti4.future4.com.br/1.mp3',
  },
  {
    description:
      'O rato roeu a ropa do rei de Roma O sapo saltou do saco Se sacudiu e sumiu da soma',
    audio: 'http://spoti4.future4.com.br/2.mp3',
  },
  {
    description:
      'Trazei três pratos de trigo para três tigres tristes comerem.',
    audio: 'http://spoti4.future4.com.br/3.mp3',
  },
]

function App() {
  const [comments, setComments] = useState<UserComment[]>(mock)

  const getFeed = () => {
    setComments([
      ...comments,
      { description: `updated feed `, audio: 'updated audio' },
    ])
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <main className="App">
      <CommentForm updateFeed={getFeed} />
      <CommentFeed comments={comments} />
    </main>
  )
}

export default App
