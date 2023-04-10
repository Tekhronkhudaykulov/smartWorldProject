import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoName from '../../../components/LogoName/logoName'
import Slider from '../../../components/Slider/slider'
import Title from '../../../components/Title/title'
import TouchIdComponent from '../../../components/TouchId/touchId'
import { APP_ROUTES } from '../../../router/Route'
import styles from "./touchId.module.css"

const TouchIdScreen = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <LogoName />
            <TouchIdComponent />
            <Slider onPress={() => navigation(APP_ROUTES.MAIN)} />
            <Title fontSize='20px' title='Текст' />
        </div>
    )
}

export default TouchIdScreen
