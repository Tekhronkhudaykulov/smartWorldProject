import React, { CSSProperties } from 'react'
import styles from "./logoName.module.css"

interface Props {
    fontSize?: string;
    style?: CSSProperties;
}

const LogoName: React.FC<Props> = ({
    fontSize,
    style
}) => {
    return (
        <div className={styles.titleBox} style={{ ...style }}>
            <h1 style={{ fontSize: fontSize }} className={styles.title}>SMART DUNYO</h1>
        </div>
    )
}

export default LogoName
