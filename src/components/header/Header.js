/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styles from './Header.module.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import Socials from './HeaderSocials'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <h5>Ola, eu sou</h5>
        <h1>Eduardo Meneses</h1>
        <h5 className="text-light">Desenvolvedor Fullstack</h5>
        <CTA />

        <Socials/>

        <div className={styles.me}>
          <img src={Me} alt='Minha foto'/>
        </div>

        <a href='#contact' className={styles.scroll_down}>Rolar Para Baixo</a>
      </div>
    </header>
  )
}

export default Header