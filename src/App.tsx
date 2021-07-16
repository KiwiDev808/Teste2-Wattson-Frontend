import React, { useEffect, useState } from 'react'
import './App.scss'
import { CommentFeed } from './components/CommentFeed'
import { CommentForm } from './components/CommentForm'
import { Loading } from './components/Loading'
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
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <CommentFeed comments={comments} updateFeed={getFeed} />
      )}
    </main>
  )
}

export default App
