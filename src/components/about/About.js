/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styles from './About.module.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'
import { IoFolder } from 'react-icons/io5'

const about = () => {
  return (
    <section id='about'>
      <h5>Conhecer</h5>
      <h2>Sobre mim</h2>

      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <img src={Me} alt="imagem sobre"/>
          </div>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon}/>
              <h5>Experiência</h5>
              <small>2+ Anos Estudando</small>
            </article>

            <article className={styles.about__card}>
              <SiBookstack className={styles.about__icon}/>
              <h5>Cursos</h5>
              <small>15+ Completos</small>
            </article>

            <article className={styles.about__card}>
              <IoFolder className={styles.about__icon}/>
              <h5>Projetos</h5>
              <small>40+ Completos</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptatum quidem, sit dolores hic velit consequatur voluptate sunt id at inventore, repellendus aperiam, laboriosam veritatis neque ipsam eveniet consectetur? Libero.</p>

          <a href='#contact' className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default about