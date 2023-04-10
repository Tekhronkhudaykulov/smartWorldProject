import React from 'react'
import styles from "./slider.module.css"
interface Props {
    onPress?: () => void
}

const Slider: React.FC<Props> = ({
    onPress
}) => {
    return (
        <div className={styles.container} onClick={onPress}>
            <div className={styles.box}></div>
        </div>
    )
}

export default Slider
