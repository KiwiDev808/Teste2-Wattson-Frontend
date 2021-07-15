import React, { useState } from 'react'
import './App.scss'
import { CommentFeed } from './components/CommentFeed'
import { CommentForm } from './components/CommentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CommentForm />
      <CommentFeed />
    </div>
  )
}

export default App
