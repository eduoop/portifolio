import React from 'react'
import styles from './Portifolio.module.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Buscador de animes",
    github: "https://github.com/",
    demo: "https://discord.com/channels/@me"
  },
  {
    id: 2,
    image: IMG2,
    title: "Lista de tarefas em Javascript",
    github: "https://github.com/",
    demo: "https://discord.com/channels/@me"
  },
  {
    id: 3,
    image: IMG3,
    title: "Calculadora Javascript",
    github: "https://github.com/",
    demo: "https://discord.com/channels/@me"
  },
  {
    id: 4,
    image: IMG4,
    title: "Pokedex React JS",
    github: "https://github.com/",
    demo: "https://discord.com/channels/@me"
  },
  {
    id: 5,
    image: IMG5,
    title: "Cordel moderno",
    github: "https://github.com/",
    demo: "https://discord.com/channels/@me"
  },
  {
    id: 6,
    image: IMG6,
    title: "Portifólio Pessoal",
    github: "https://github.com/",
    demo: "https://discord.com/channels/@me"
  }
]

const Portifolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portifólio</h2>

      <div className={`container ${styles.portifolio_container}`}>
        { 
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className={styles.portifolio_item}>
              <div className={styles.portifolio_item_image}>
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className={styles.portifolio_item_cta}>
                  <a href={github} target='_blank' className={`btn`}>Github</a>
                  <a href={demo} target='_blank' className={`  btn btn-primary`}>Ver demonstração</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portifolio