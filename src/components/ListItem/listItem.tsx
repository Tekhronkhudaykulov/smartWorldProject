import React from "react";
import { DelateIcon } from "../../assets/icons";
import { ASSETS } from "../../constants/requireAssets";
import AddAndSubstraction from "../AddAndSubstraction/addAndSubstraction";
import GreyText from "../GreyText/greyText";
import IconComp from "../IconComp/iconComp";
import Text from "../Text/text";
import Title from "../Title/title";
import styles from "./listItem.module.css";
import { baseUrl } from "../../contants/API";
interface Props {
  img?: string;
  name?: string;
  price: string | number;
  count?: string | number;
  onDelate?: () => void;
  add?: () => void;
  subt?: () => void;
}

const ListItem: React.FC<Props> = ({
  img,
  name,
  price,
  count,
  onDelate,
  add,
  subt,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.listBox}>
        <div className={styles.nameBox}>
          <div className={styles.itemImg}>
            <img src={`${baseUrl}/${img}`} alt="" />
          </div>
          <Text text={name} />
        </div>
        <div className={styles.btnBox}>
          <AddAndSubstraction
            addBtn={add}
            subtractionBtn={subt}
            count={count}
          />
        </div>
        <div className={styles.rightBox}>
          <Title title={price} fontSize="15px" />
          <IconComp
            iconType="outline"
            icon={<DelateIcon />}
            onPress={onDelate}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
