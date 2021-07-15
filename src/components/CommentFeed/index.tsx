import React from 'react'
import { Comment } from '../Comment'
import { UserComment } from '../types/Comment'
import styles from './styles.module.scss'

export const CommentFeed = ({ comments }: { comments: UserComment[] }) => {
  return (
    <section>
      <div className={styles.feedContainer}>
        <h2>Comentários</h2>
        {comments.map((comment) => {
          return <Comment comment={comment} />
        })}
      </div>
    </section>
  )
}
