import React from 'react'
import styles from './Footer.module.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className={styles.footer_logo}>Eduardo Moraes</a>

      <ul className={styles.permalinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portifólio</a></li>
        <li><a href="#testimonials">Comentários</a></li>
        <li><a href="#contact">contato</a></li>
      </ul>

      <div className={styles.footer_socials}>
        <a href="https://instagram.com/eduardo_omp"><BsInstagram/></a>
        <a href="https://github.com"><BsFacebook/></a>
        <a href="https://facebook.com"><BsGithub/></a>
      </div>

      <div className={styles.footer_copy}>
        <small>&copy; Eduardo Moraes. Todos os doreitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer