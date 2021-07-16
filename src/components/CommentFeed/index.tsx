import React from 'react'
import { deleteComment } from '../../services/api'
import { Comment } from '../Comment'
import { UserComment } from '../types/Comment'
import styles from './styles.module.scss'

export const CommentFeed = ({
  comments,
  updateFeed,
}: {
  comments: UserComment[]
  updateFeed: Function
}) => {
  const deleteCommentAux = async (comment: UserComment) => {
    const shouldDelete = window.confirm(`Should delete this comment?`)
    if (shouldDelete) {
      try {
        await deleteComment(comment.id)
        updateFeed()
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  return (
    <section>
      <div className={styles.feedContainer}>
        <h2>Comentários</h2>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              deleteComment={deleteCommentAux}
            />
          )
        })}
      </div>
    </section>
  )
}
