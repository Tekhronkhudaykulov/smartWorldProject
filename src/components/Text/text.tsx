import React, { CSSProperties } from 'react'
import styles from "./text.module.css"
interface Props {
    text?: string;
    style?: CSSProperties;
}

const Text: React.FC<Props> = ({
    text,
    style
}) => {
    return (
        <h4 style={{ ...style }} className={styles.text}>{text}</h4>
    )
}

export default Text
