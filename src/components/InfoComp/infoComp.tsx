import React from 'react'
import { COLORS } from '../../constants/colors'
import Text from '../Text/text'
import Title from '../Title/title'
import styles from "./infoComp.module.css"
interface Props {
    title: string;
    text?: string;
    titleColor?: string;
}

const InfoComp: React.FC<Props> = ({
    title,
    text,
    titleColor
}) => {
    return (
        <div className={styles.container}>
            <Title
                title={title}
                color={titleColor}
                fontSize="28px"
            />
            <Text
                text={text}
            />
        </div>
    )
}

export default InfoComp
