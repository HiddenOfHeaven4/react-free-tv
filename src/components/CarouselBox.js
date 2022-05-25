import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/App.module.css'
import nhlImg from '../assets/background-nhl.jpg'
import nflImg from '../assets/background-nfl.jpg'
import nbaImg from '../assets/background-nba.jpg'
import mlbImg from '../assets/background-mlb.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ nhlImg }
                        alt='NHL'
                    />
                    <Carousel.Caption className={styles.textNHL}>
                        <h3>Бесплатные трансляции матчей Национальной хоккейной лиги</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ nflImg }
                        alt='NFL'
                    />
                    <Carousel.Caption className={styles.textNFL}>
                        <h3>Бесплатные трансляции матчей Национальной футбольной лиги</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ nbaImg }
                        alt='NBA'
                    />
                    <Carousel.Caption className={styles.textNBA}>
                        <h3>Бесплатные трансляции матчей Национальной баскетбольной лиги</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ mlbImg }
                        alt='MLB'
                    />
                    <Carousel.Caption className={styles.textNHL}>
                        <h3>Бесплатные трансляции матчей Главной лиги бейсбола</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}