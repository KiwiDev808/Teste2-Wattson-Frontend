import React, { useState } from 'react'
import { createComment } from '../../services/api'
import styles from './styles.module.scss'

export const CommentForm = ({ updateFeed }: { updateFeed: Function }) => {
  const [text, setText] = useState('')

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const sendComment = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await createComment(text)
    setText('')
    updateFeed()
  }

  return (
    <section>
      <form className={styles.form}>
        <label>Comentário</label>
        <textarea
          name="comment "
          rows={1}
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit" onClick={sendComment}>
          Cadastrar
        </button>
      </form>
    </section>
  )
}
