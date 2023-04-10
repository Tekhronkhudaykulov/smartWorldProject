import React from 'react'
import { ASSETS } from '../../constants/requireAssets';
import styles from "./faceId.module.css"

const FaceIdComp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarBox}>
                <img className={styles.faceBox} src={ASSETS.faceImage} alt="" />
            </div>
        </div>
    )
}

export default FaceIdComp;
