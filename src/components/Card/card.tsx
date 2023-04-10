import React from 'react'
import { CaseLarge } from '../../assets/icons'
import Text from '../Text/text'
import styles from "./card.module.css"
interface Props {
    icon?: any;
    text?: string;
    onPress?: () => void;
}

const Card: React.FC<Props> = ({
    icon,
    text,
    onPress
}) => {
    return (
        <div className={styles.container} onClick={onPress}>
            <div>
                {icon ?
                    icon :
                    null
                }
            </div>
            <Text text={text} />
        </div>
    )
}

export default Card
