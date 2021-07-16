import React from 'react'
import styles from './styles.module.scss'

export const Loading = ({ isButton }: { isButton?: boolean }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={isButton ? styles.buttonLoader : styles.loader}></div>
    </div>
  )
}
