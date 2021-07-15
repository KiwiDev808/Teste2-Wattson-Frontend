import React, { useEffect, useState } from 'react'

const mock = [
  { description: 'Test1', audio: 'http://spoti4.future4.com.br/1.mp3' },
  { description: 'Test2', audio: 'http://spoti4.future4.com.br/2.mp3' },
  { description: 'Test3', audio: 'http://spoti4.future4.com.br/3.mp3' },
  { description: 'Test4', audio: 'http://spoti4.future4.com.br/4.mp3' },
]

export const CommentFeed = () => {
  const [state, setstate] = useState(initialState)
  useEffect(() => {}, [comments])
  return (
    <div>
      <h2>Comentários</h2>
    </div>
  )
}
