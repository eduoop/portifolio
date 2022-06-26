import React from 'react'
import styles from './Expirience.module.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Expirience = () => {
  return (
    <section id='experience'>
      <h5>Quais Habilidades Eu Tenho</h5>
      <h2>Minha Experiência</h2>

      <div className={`container ${styles.experience__container}`}>
        <div className={`experience__frontend`}>
          <h3>Desenvolvimento Frontend</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>HTML</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>CSS</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>Javascript</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>React JS</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>Vue JS</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

          </div>
        </div>
        <div className={`experience__backend`}>
        <h3>Desenvolvimento Backend</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>Node JS</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>Adonis JS</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon}/>
              <div>
                <h4>MySQL</h4>
                <small className={`text-light`}>Experiência</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Expirience