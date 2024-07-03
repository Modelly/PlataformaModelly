import React from 'react';
import Slider from 'react-slick';
import FeedbackCard from './FeedbackCard';
import styles from './FeedbackCarousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
    {
        name: 'Matheus',
        description: 'Alguma descrição',
        title: 'Encantador',
        feedback: 'Adorei a atenção da loja. Produto entregue no prazo.',
        rating: 4
    },
    {
        name: 'Jhonatan',
        description: 'Alguma descrição',
        title: 'Satisfação Garantida',
        feedback: 'Compra excelente. Atendimento ótimo.',
        rating: 5
    },
    {
        name: 'Pamela',
        description: 'Alguma descrição',
        title: 'Título exemplo!',
        feedback: 'Lorem ipsum dolor sit amet.',
        rating: 4
    },
    {
        name: 'Giovanna',
        description: 'Alguma descrição',
        title: 'Título exemplo!',
        feedback: 'Lorem ipsum dolor sit amet.',
        rating: 5
    }
];

const FeedbackCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.title}>Feedback dos usuários que compraram de Nome da Loja</h2>
            <Slider className={styles.customSlider} {...settings}>
                {feedbacks.map((feedback, index) => (
                    <FeedbackCard key={index} {...feedback} />
                ))}
            </Slider>
        </div>
    );
};

export default FeedbackCarousel;
