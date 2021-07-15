import React, { useState } from 'react'
import styles from './styles.module.scss'

export const CommentForm = ({ updateFeed }: { updateFeed: Function }) => {
  const [text, setText] = useState('')

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const sendComment = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(text)
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
