import React from 'react'
import styles from "./banner.module.css"
import Carousel from 'nuka-carousel';
import { ASSETS } from '../../constants/requireAssets';
import Title from '../Title/title';

const Banner = () => {
    return (
        <div className={styles.container}>
            <Carousel
                className={styles.banner}
                autoplay
                style={{
                    height: "250px",
                    width: "100%"
                }}
            >
                <img className={styles.bannerImg} src={ASSETS.bannner} />
                <img className={styles.bannerImg} src={ASSETS.bannner} />
                <img className={styles.bannerImg} src={ASSETS.bannner} />
            </Carousel>
        </div>
    )
}

export default Banner
