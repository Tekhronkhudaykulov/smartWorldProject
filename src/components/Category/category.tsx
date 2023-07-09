import React, { useEffect, useState } from "react";
import { CategoryData } from "../../AllDatas/categoryData";
import { CategoryiIcon } from "../../assets/icons";
import { COLORS } from "../../constants/colors";
import GreyText from "../GreyText/greyText";
import Title from "../Title/title";
import styles from "./category.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";

const Category = () => {
  const [category_id, setCategory] = useState(0);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.categorySlice.getCategory();
  }, []);

  const { categoryList } = useSelector(
    (state: RootState) => state.categorySlice
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CategoryiIcon />
        <Title
          fontSize="16px"
          style={{ marginLeft: "10px" }}
          title="Категории"
        />
      </div>
      <div className={styles.category}>
        <GreyText
          style={{
            margin: "10px 0",
            cursor: "pointer",

            color: category_id === 0 ? COLORS.orange : COLORS.grey,
          }}
          hover={true}
          text="Все"
          onPress={() => {
            dispatch.productSlice.getProduct("");
            setCategory(0);
          }}
        />
        {categoryList.map((e, index) => {
          return (
            <GreyText
              key={index}
              style={{
                margin: "10px 0",
                cursor: "pointer",

                color: category_id === e.id ? COLORS.orange : COLORS.grey,
              }}
              hover={true}
              text={e.name}
              onPress={() => {
                dispatch.productSlice.getProduct(e.id);
                setCategory(e.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
