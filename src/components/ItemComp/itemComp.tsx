import React, { CSSProperties } from 'react'
import { Limit } from '../../assets/icons'
import { COLORS } from '../../constants/colors'
import IconComp from '../IconComp/iconComp'
import Text from '../Text/text'
import Title from '../Title/title'
import styles from "./itemComp.module.css"
interface Props {
    style?: CSSProperties;
    icon?: any;
    title: string;
    text: string;
    textColor?: string;
    iconBack?: string;
}

const ItemComp: React.FC<Props> = ({
    style,
    icon,
    title,
    text,
    textColor,
    iconBack
}) => {
    return (
        <div className={styles.container} style={{ ...style }} >
            <div className={styles.leftBox}>
                <IconComp iconType='primary' backColor={iconBack} icon={icon} />
            </div>
            <div className={styles.rightBox}>
                <Title
                    title={title}
                    fontSize='18px'
                />
                <Title
                    title={text}
                    fontSize='24px'
                    color={textColor}
                />
            </div>
        </div>
    )
}

export default ItemComp
