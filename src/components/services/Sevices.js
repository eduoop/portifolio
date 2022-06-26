import React from 'react'
import {BsCheck} from 'react-icons/bs'
import styles from './Sevices.module.css'

const Sevices = () => {
  return (
    <section id='services'>
      <h5>Oque Eu Ofereço</h5>
      <h2>Serviços</h2>

      <div className={`container ${styles.services__container}`}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>

            <ul className={styles.service__list}>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
            </ul>
        </article>
        {/* fim de UI/UX */}

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Desenvolvimento Web Frontend</h3>
          </div>

            <ul className={styles.service__list}>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
            </ul>
        </article>
        {/* fim desenvolvimento web front*/}

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Desenvolvimento Web Backend</h3>
          </div>

            <ul className={styles.service__list}>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li>
                <BsCheck className={styles.service__list_icon}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
            </ul>
        </article>
        {/* fim Criação de conteudo */}
      </div>  
    </section>
  )
}

export default Sevices