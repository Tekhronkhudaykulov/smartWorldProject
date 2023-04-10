import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/button'
import LogoName from '../../../components/LogoName/logoName'
import Title from '../../../components/Title/title'
import { APP_ROUTES } from '../../../router/Route'
import styles from "./authorization.module.css"

const Authorization = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <LogoName fontSize='80px' />
                <Title style={{ textAlign: "center" }} title='Авторизация' />
            </div>
            <div className={styles.bottomBox}>
                <Button
                    btnSize='large'
                    btnType='primary'
                    title='Войти'
                    onPress={() => navigation(APP_ROUTES.LOGIN)}
                />
                <Button
                    style={{ marginTop: '20px' }}
                    btnSize='large'
                    btnType='outline'
                    title='Авторизация нового пользователя'
                    onPress={() => navigation(APP_ROUTES.FACE_ID)}
                />
            </div>
        </div>
    )
}

export default Authorization
