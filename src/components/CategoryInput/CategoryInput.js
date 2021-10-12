import React, { useState } from "react";
import styles from "./CategoryInput.module.scss";

const CategoryInput = () => {
  const [isCategories, setIsCategories] = useState(false);

  const handleClick = () => {
    setIsCategories(!isCategories);
  };

  const handleCategoryClick = (e) => {
    const inputCategories = document.getElementById("category_input");
    inputCategories.value = e.currentTarget.value;
    handleClick();
  };

  return (
    <div className={styles.form_input_category_parent}>
      <input
        className={styles.form_input_category}
        autoComplete="off"
        id="category_input"
        type="text"
        placeholder="Категория товара"
        onClick={handleClick}
      />
      {!isCategories || (
        <ul className={styles.form_category_list}>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Продукты"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Продукты
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Здоровье"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Здоровье
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Алкоголь"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Алкоголь
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Развлечения"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Развлечения
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Всё для дома"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Всё для дома
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Техника"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Техника
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Коммуналка, связь"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Коммуналка, связь
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="hСпорт, хоббиobby"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Спорт, хобби
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Образование"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Образование
            </label>
          </li>
          <li>
            <label className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value="Прочее"
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              Прочее
            </label>
          </li>
        </ul>
      )}
      {!isCategories ? (
        <span
          className={styles.arrow_down}
          onClick={handleClick}
          id="arrow"
        ></span>
      ) : (
        <span
          className={styles.arrow_up}
          onClick={handleClick}
          id="arrow"
        ></span>
      )}
    </div>
  );
};

export default CategoryInput;
