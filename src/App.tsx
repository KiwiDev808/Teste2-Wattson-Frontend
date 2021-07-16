import React, { useEffect, useState } from 'react'
import './App.scss'
import { CommentFeed } from './components/CommentFeed'
import { CommentForm } from './components/CommentForm'
import { UserComment } from './components/types/Comment'
import { getAllComments } from './services/api'

function App() {
  const [comments, setComments] = useState<UserComment[]>([])
  const [loading, setLoading] = useState(false)

  const getFeed = async () => {
    try {
      setLoading(true)
      const response = await getAllComments()
      setComments(response.comments)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const startFeed = async () => {
      await getFeed()
    }
    startFeed()
  }, [])

  return (
    <main className="App">
      <CommentForm updateFeed={getFeed} />
      <CommentFeed comments={comments} />
    </main>
  )
}

export default App
