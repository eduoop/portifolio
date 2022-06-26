import React from 'react'
import styles from './Testimonials.module.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Eduardo Moraes',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui cum delectus perferendis quia, ullam quas quis? Numquam et deserunt sapiente, earum aperiam harum! Obcaecati ad ratione accusamus incidunt at wqwfqe .'
  },
  {
    avatar: AVTR2,
    name: 'Edward Moraes',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui cum delectus perferendis quia, ullam quas quis? Numquam et deserunt sapiente, earum aperiam harum! Obcaecati ad ratione accusamus incidunt at wqwfqe!'
  },
  {
    avatar: AVTR3,
    name: 'Emanuelly Lopes',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui cum delectus perferendis quia, ullam quas quis? Numquam et deserunt sapiente, earum aperiam harum! Obcaecati ad ratione accusamus incidunt at wqwfqe .'
  },
  {
    avatar: AVTR4,
    name: 'Siméia Lopes',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui cum delectus perferendis quia, ullam quas quis? Numquam et deserunt sapiente, earum aperiam harum! Obcaecati ad ratione accusamus incidunt at wqwfqe'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>avaliações de clientes</h5>
      <h2>Opniões</h2>

      <Swiper
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      className={`${styles.container} ${styles.testimonials_container}`}>
        { data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className={styles.testimonials}>
          <div className={styles.client_avatar}>
            <img src={avatar} alt={name} />
          </div>
          <h5 className={styles.client_name}>Matheus Martins</h5>
            <small className={styles.client_review}>
              {review}
            </small>
        </SwiperSlide>
        )) }
      </Swiper>
    </section>
  )
}

export default Testimonials