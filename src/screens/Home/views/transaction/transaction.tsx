import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeIcon } from '../../../../assets/icons'
import HistoryList from '../../../../components/HistoryList/historyList'
import IconComp from '../../../../components/IconComp/iconComp'
import Title from '../../../../components/Title/title'
import { APP_ROUTES } from '../../../../router/Route'
import styles from "./transaction.module.css"

const Transaction = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <IconComp onPress={() => navigation(APP_ROUTES.MAIN)} icon={<HomeIcon />} iconType={'primary'} text="Главная" />
            </div>
            <div className={styles.lists}>
                <Title fontSize="22px" title='История транзакций' />
                <HistoryList />
            </div>
        </div>
    )
}

export default Transaction
