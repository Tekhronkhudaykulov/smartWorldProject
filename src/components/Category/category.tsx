import React, { useEffect, useState } from "react";
import { CategoryData } from "../../AllDatas/categoryData";
import { CategoryiIcon } from "../../assets/icons";
import { COLORS } from "../../constants/colors";
import GreyText from "../GreyText/greyText";
import Title from "../Title/title";
import styles from "./category.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { useSearchParams } from "react-router-dom";
import { omitBy, isUndefined } from "lodash";

const Category = () => {
  const [category_id, setCategory] = useState(0);

  const dispatch = useDispatch<Dispatch>();

  const [searchParams, setSearchParams]: [any, any] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams);
    setSearchParams(currentParams);
  }, [searchParams]);

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
                const params = omitBy(
                  {
                    ...Object.fromEntries(searchParams),
                    category_id: e.id,
                  },
                  isUndefined
                );
                setCategory(e.id);

                setSearchParams(params);
                dispatch.productSlice.getProduct(params);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
