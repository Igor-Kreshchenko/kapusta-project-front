import React from "react";
import CategoriesList from "../CategoriesList";

const singleIncome = [
    {
  _id: "0000000000",
  date: "20.02.2021",
  category: "ЗП",
  amount: 100,
  description: "вернули долг",
    },
      {
  _id: "0000000009",
  date: "20.02.2021",
  category: "Дополнительные доходы",
  amount: 100,
  description: "вернули долг",
    },
];
const Income = ( ) => {
    return (
          <CategoriesList
            obj={ singleIncome}/>
    )
};
export default Income;
  