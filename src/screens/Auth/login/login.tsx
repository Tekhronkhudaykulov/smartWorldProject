import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/button';
import Input from '../../../components/Input/input';
import LogoName from '../../../components/LogoName/logoName'
import Title from '../../../components/Title/title';
import { APP_ROUTES } from '../../../router/Route';
import styles from "./login.module.css"

const Login = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <LogoName />
                <Title title='Авторизация' />
            </div>
            <div className={styles.bottomBox}>
                <Input
                    label='Ф.И.О'
                    placohlder='Фамилия Имя Отчество'
                // iconUrl={<SearchIcon />}
                />
                <Button
                    btnSize='large'
                    btnType='primary'
                    title='Войти'
                    style={{
                        marginTop: "30px"
                    }}
                    onPress={() => navigation(APP_ROUTES.MAIN)}
                />
            </div>
        </div>
    )
}

export default Login
