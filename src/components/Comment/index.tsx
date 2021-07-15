import React from 'react'
import { useAudio } from '../../hooks/useAudio'
import { UserComment } from '../types/Comment'

export const Comment = ({ comment }: { comment: UserComment }) => {
  const [playing, toggle] = useAudio(comment.audio)
  return (
    <div>
      <p>{comment.description}</p>
      <button onClick={toggle as any}>{playing ? 'Pausar' : 'Ouvir'}</button>
    </div>
  )
}
