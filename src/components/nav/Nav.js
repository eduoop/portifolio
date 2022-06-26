/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Nav.module.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className={styles.nav}>
      <a href='#' onClick={(() => setActiveNav('#'))} className={activeNav === '#' ? styles.active : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={(() => setActiveNav('#about'))} className={activeNav === '#about' ? styles.active : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={(() => setActiveNav('#experience'))} className={activeNav === '#experience' ? styles.active : ''}><BiBook/></a>
      <a href='#services' onClick={(() => setActiveNav('#services'))} className={activeNav === '#services' ? styles.active : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={(() => setActiveNav('#contact'))} className={activeNav === '#contact' ? styles.active : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav