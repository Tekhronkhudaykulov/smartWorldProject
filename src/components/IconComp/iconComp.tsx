import React, { CSSProperties } from 'react'
import { ArrowRight } from '../../assets/icons'
import GreyText from '../GreyText/greyText';
import styles from "./iconComp.module.css"

interface Props {
    icon: any;
    text?: string;
    onPress?: () => void;
    backColor?: string;
    style?: CSSProperties;
    iconType: "primary" | "outline"
}

const IconComp: React.FC<Props> = ({
    icon,
    text,
    onPress,
    backColor,
    style,
    iconType
}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles[iconType]}`} style={{ ...style, backgroundColor: backColor }} onClick={onPress}>
                {icon}
            </div>
            <GreyText text={text} />
        </div>
    )
}

export default IconComp
