import React from 'react'
import { useAudio } from '../../hooks/useAudio'
import { UserComment } from '../types/Comment'
import styles from './styles.module.scss'

export const Comment = ({
  comment,
  deleteComment,
}: {
  comment: UserComment
  deleteComment: Function
}) => {
  const [playing, toggle] = useAudio(comment.audio)

  return (
    <div className={styles.commentContainer}>
      <p>{comment.description}</p>
      <button onClick={() => deleteComment(comment) as any}> Delete</button>
      <button onClick={toggle as any}>{playing ? 'Pausar' : 'Ouvir'}</button>
    </div>
  )
}
