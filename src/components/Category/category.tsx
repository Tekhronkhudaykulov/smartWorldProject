import React, { useState } from 'react'
import { CategoryData } from '../../AllDatas/categoryData'
import { CategoryiIcon } from '../../assets/icons'
import { COLORS } from '../../constants/colors'
import GreyText from '../GreyText/greyText'
import Title from '../Title/title'
import styles from "./category.module.css"

const Category = () => {
    const [category, setCategory] = useState(1)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <CategoryiIcon />
                <Title fontSize='16px' style={{ marginLeft: "10px" }} title='Категории' />
            </div>
            <div className={styles.category}>
                {
                    CategoryData.map((e, index) => {
                        return (
                            <GreyText
                                key={index}
                                style={{
                                    margin: "10px 0",
                                    cursor: "pointer",

                                    color: category === e.id ? COLORS.orange : COLORS.grey
                                }}
                                hover={true}
                                text={e.name}
                                onPress={() => setCategory(e.id)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
