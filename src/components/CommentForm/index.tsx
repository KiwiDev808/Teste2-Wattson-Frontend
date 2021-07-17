import React, { useEffect, useState } from 'react'
import { createComment } from '../../services/api'
import { Loading } from '../Loading'
import styles from './styles.module.scss'

export const CommentForm = ({ updateFeed }: { updateFeed: Function }) => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const sendComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      await createComment(text)
      updateFeed()
    } catch (error) {
      console.log('axios message', error.response.data)
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const commentInput = document.getElementById('comment-input')
    const commentForm = document.getElementById('comment-form')
    if (commentForm) {
      commentForm.onsubmit = (e: any) => {
        if (commentInput) {
          commentInput.value = ''
        }
      }
    }
    if (commentInput) {
      commentInput.oninvalid = (e: any) => {
        e?.target?.setCustomValidity(
          'Coloque pelo menos 6 caracteres e no máximo 200'
        )
      }
      commentInput.oninput = (e: any) => {
        e?.target?.setCustomValidity('')
      }
    }
  }, [])

  return (
    <section>
      <form id="comment-form" className={styles.form} onSubmit={sendComment}>
        <label>Comentário</label>
        <textarea
          id="comment-input"
          placeholder="Coloque algum texto, e.g: Hoje o dia está ensolarado"
          minLength={6}
          title="Coloque pelo menos 6 caracteres e no máximo 200"
          maxLength={200}
          required
          name="comment description"
          onChange={handleTextChange}
        />
        <button type="submit">
          {loading ? <Loading isButton /> : 'Cadastrar'}
        </button>
      </form>
    </section>
  )
}
