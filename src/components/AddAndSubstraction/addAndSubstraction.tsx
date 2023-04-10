import React, { CSSProperties, useState } from 'react'
import styles from "./addAbdSubstraction.module.css"
interface Props {
    addBtn?: () => void;
    subtractionBtn?: () => void;
    count?: string | number;
    style?: CSSProperties;
}

const AddAndSubstraction: React.FC<Props> = ({
    addBtn,
    subtractionBtn,
    count,
    style
}) => {
    const [counts, setCounts] = useState(1)
    const Counter = () => {
        if (counts > 1) {
            setCounts(counts - 1)
        } else {
            setCounts(1)
        }
    }
    return (
        <div className={styles.container} style={{ ...style }}>
            <button style={{ marginBottom: "3px" }} onClick={() => Counter()}>-</button>
            <p className={styles.count}>{counts}</p>
            <button onClick={() => setCounts(counts + 1)}>+</button>
        </div>
    )
}

export default AddAndSubstraction
