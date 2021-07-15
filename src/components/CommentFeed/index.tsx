import React, { useEffect, useState } from 'react'
import { Comment } from '../Comment'
import { UserComment } from '../types/Comment'

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

export const CommentFeed = () => {
  const [comments, setComments] = useState<UserComment[]>([])
  useEffect(() => {
    setComments(mock)
  }, [comments])
  return (
    <div>
      <h2>Comentários</h2>
      {comments.map((comment) => {
        return <Comment comment={comment} />
      })}
    </div>
  )
}
