import React, { CSSProperties } from 'react'
import Text from '../Text/text';
import styles from "./button.module.css"
interface Props {
    onPress?: () => void;
    title?: string;
    style?: CSSProperties;
    btnType: 'primary' | 'outline';
    btnSize: 'large' | 'small',
    disabled?: boolean;
}

const Button: React.FC<Props> = ({
    btnType,
    btnSize,
    title,
    style,
    onPress,
    disabled
}) => {
    return (
        <button
            onClick={onPress}
            className={`${styles[btnType]} ${styles[btnSize]}`}
            style={{ ...style }}
            disabled={disabled}
        >
            <p>{title}</p>
        </button>
    )
}

export default Button
