import React from 'react'
import { COLORS } from '../../constants/colors'
import Text from '../Text/text'
import Title from '../Title/title'
import styles from "./historyList.module.css"

const HistoryList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <div className={styles.top}>
                    <Title fontSize="17px" title='Остаток на начало месяца:' />
                </div>
                <div className={styles.top}>
                    <Title fontSize="17px" title='500.000 сум' color={COLORS.orange} />
                </div>
            </div>
            <div className={styles.listBox} style={{ backgroundColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='Дата' style={{ color: COLORS.white }} />
                </div>
                <div className={styles.list}>
                    <Text text='Операция' style={{ color: COLORS.white }} />
                </div>
                <div className={styles.list}>
                    <Text text='Приход' style={{ color: COLORS.white }} />
                </div>
                <div className={styles.list}>
                    <Text text='Расход' style={{ color: COLORS.white }} />
                </div>
            </div>
            <div className={styles.listBox} style={{ borderColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='27.03.2022' />
                </div>
                <div className={styles.list}>
                    <Text text='Зарплата' />
                </div>
                <div className={styles.list}>
                    <Text text='10.000 сум' />
                </div>
                <div className={styles.list}>
                    {/* <Text text='Расход' /> */}
                </div>
            </div>
            <div className={styles.listBox} style={{ borderColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='27.03.2022' />
                </div>
                <div className={styles.list}>
                    <Text text='Операция' />
                </div>
                <div className={styles.list}>
                    {/* <Text text='Приход' /> */}
                </div>
                <div className={styles.list}>
                    <Text text='1.000 сум' />
                </div>
            </div>
            <div className={styles.listBox} style={{ borderColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='27.03.2022' />
                </div>
                <div className={styles.list}>
                    <Text text='Операция' />
                </div>
                <div className={styles.list}>
                    {/* <Text text='Приход' /> */}
                </div>
                <div className={styles.list}>
                    <Text text='1.000 сум' />
                </div>
            </div>
            <div className={styles.listBox} style={{ borderColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='27.03.2022' />
                </div>
                <div className={styles.list}>
                    <Text text='Операция' />
                </div>
                <div className={styles.list}>
                    {/* <Text text='Приход' /> */}
                </div>
                <div className={styles.list}>
                    <Text text='1.000 сум' />
                </div>
            </div>
            <div className={styles.listBox} style={{ borderColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='27.03.2022' />
                </div>
                <div className={styles.list}>
                    <Text text='Операция' />
                </div>
                <div className={styles.list}>
                    {/* <Text text='Приход' /> */}
                </div>
                <div className={styles.list}>
                    <Text text='1.000 сум' />
                </div>
            </div>
            <div className={styles.listBox} style={{ backgroundColor: COLORS.orange }}>
                <div className={styles.list}>
                    <Text text='Всего:' style={{ color: COLORS.white }} />
                </div>
                <div className={styles.list}>
                    {/* <Text text='Операция' style={{ color: COLORS.white }} /> */}
                </div>
                <div className={styles.list}>
                    <Text text='60.000 сум' style={{ color: COLORS.white }} />
                </div>
                <div className={styles.list}>
                    <Text text='14.000 сум' style={{ color: COLORS.white }} />
                </div>
            </div>
            <div className={styles.total}>
                <div className={styles.top}>
                    <Title fontSize="17px" title='Остаток на начало месяца:' />
                </div>
                <div className={styles.top}>
                    <Title fontSize="17px" title='500.000 сум' color={COLORS.orange} />
                </div>
            </div>
        </div>
    )
}

export default HistoryList
