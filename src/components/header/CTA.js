import React from 'react'
import CV from '../../assets/cv.pdf'
import styles from './Header.module.css'

const CTA = () => {
  return (
    <div className={styles.cta}>
        <a href={CV} download className='btn'>Baixar CV</a>
        <a href='#contact' className='btn btn-primary'>Vamos conversar</a>
    </div>
  )
}

export default CTA