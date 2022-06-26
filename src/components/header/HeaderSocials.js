import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import styles from './Header.module.css'


const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
        <a href='https://www.linkedin.com/in/eduardo-moraes-718a02219/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/eduoop' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/eduardo_omp/?hl=en' target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials