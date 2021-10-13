import React, { useState } from "react";
import styles from "./CategoryInput.module.scss";

const CategoryInput = ({type, categoryPick, setCategory}) => {
  const [isCategories, setIsCategories] = useState(false);

  const expenseCategory = [
    "Транспорт",
    "Продукты",
    "Здоровье",
    "Алкоголь",
    "Развлечения",
    "Всё для дома",
    "Техника",
    "Коммуналка, связь",
    "Спорт, хобби",
    "Образование",
    "Прочее",
  ];
  const incomeCategory = ["ЗП", "Доп. доход"];

  const handleClick = () => {
    setIsCategories(!isCategories);
  };

  const handleCategoryClick = (e) => {
    setCategory(e.currentTarget.value);
    handleClick();
  };

  return (
    <div className={styles.form_input_category_parent}>
      <input
        className={styles.form_input_category}
        autoComplete="off"
        id="category_input"
        type="text"
        value={categoryPick}
        placeholder="Категория товара"
        onClick={handleClick}
      />
      {!isCategories || (
        <ul className={styles.form_category_list}>
          {type === "expenses" ? expenseCategory.map((expense, index) => (<li>
            <label key={index} className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value={expense}
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              {expense}
            </label>
          </li>)):
          incomeCategory.map((income, index) => (<li>
            <label key={index}className={styles.category_label}>
              <input
                onClick={handleCategoryClick}
                hidden
                value={income}
                type="radio"
                name="exp_category"
                className={styles.radiobutton}
              />
              {income}
            </label>
          </li>))}
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
