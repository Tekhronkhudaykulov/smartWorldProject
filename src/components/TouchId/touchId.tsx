import React from 'react'
import { ASSETS } from '../../constants/requireAssets'
import styles from "./touchId.module.css"
interface Props {

}

const TouchIdComponent: React.FC<Props> = ({

}) => {
    return (
        <div className={styles.container}>
            <img className={styles.touch} src={ASSETS.touchIdImage} alt="" />
        </div>
    )
}

export default TouchIdComponent
