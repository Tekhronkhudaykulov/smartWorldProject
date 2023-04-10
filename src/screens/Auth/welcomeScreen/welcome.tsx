import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../../components/Banner/banner'
import Button from '../../../components/Button/button'
import LogoName from '../../../components/LogoName/logoName'
import Slider from '../../../components/Slider/slider'
import { APP_ROUTES } from '../../../router/Route'
import styles from "./welcome.module.css"

const WelcomeScreen = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.logoBox}>
                <LogoName fontSize='170px' />
            </div>
            <div className={styles.bannerBox}>
                <Slider onPress={() => navigation(APP_ROUTES.AUTH)} />
                <Banner />
            </div>
        </div>
    )
}

export default WelcomeScreen
