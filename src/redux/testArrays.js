import { transactionsActions, transactionsSelectors } from "./transactions";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";

const arrayExpenses = [
  {
    _id: "11811111111111111",
    amount: 200,
    date: "21.01.2021",
    category: "Продукты",
    description: "свинина",
  },
  {
    _id: "12181111111111111",
    amount: 300,
    date: "24.01.2021",
    category: "Алкоголь",
    description: "капитан морган",
  },
  {
    _id: "13111811111111111",
    amount: 100,
    date: "21.02.2021",
    category: "Продукты",
    description: "борщевой набор",
  },
  {
    _id: "14111111811111111",
    amount: 50,
    date: "11.02.2021",
    category: "Развлечения",
    description: "Прогулка",
  },
  {
    _id: "15111118111111111",
    amount: 20,
    date: "15.02.2021",
    category: "Продукты",
    description: "зелень",
  },
  {
    _id: "161111099111",
    amount: 350,
    date: "15.01.2021",
    category: "Продукты",
    description: "сыр",
  },
  {
    _id: "16111119111111111",
    amount: 150,
    date: "27.09.2020",
    category: "Алкоголь",
    description: "водка",
  },
  {
    _id: "18111161111111111",
    amount: 230,
    date: "13.11.2021",
    category: "Транспорт",
    description: "такси",
  },
  {
    _id: "19111111711111111",
    amount: 110,
    date: "22.05.2021",
    category: "Продукты",
    description: "Говядина",
  },
  {
    _id: "11211113111111111",
    amount: 550,
    date: "17.08.2021",
    category: "Прочее",
    description: "Ремонт",
  },
  {
    _id: "555511111011111111",
    amount: 2550,
    date: "17.10.2021",
    category: "Развлечения",
    description: "Днюха",
  },
  {
    _id: "16666111111411111",
    amount: 11550,
    date: "17.10.2021",
    category: "Прочее",
    description: "Ремонт",
  },
  {
    _id: "167811111131111",
    amount: 3550,
    date: "17.08.2021",
    category: "Здоровье",
    description: "Печень",
  },
];

const arrayIncomes = [
  {
    _id: "3331117111111111",
    amount: 20000,
    date: "31.10.2021",
    category: "ЗП",
    description: "моя",
  },
  {
    _id: "331111110111111",
    amount: 1300,
    date: "24.10.2021",
    category: "Дополнительные доходы",
    description: "лото",
  },
  {
    _id: "3321111911111111",
    amount: 20000,
    date: "31.09.2021",
    category: "ЗП",
    description: "моя",
  },
  {
    _id: "33411111411111111",
    amount: 1150,
    date: "10.09.2021",
    category: "ЗП",
    description: "жены",
  },
  {
    _id: "3351111111101111",
    amount: 22000,
    date: "31.08.2021",
    category: "ЗП",
    description: "моя",
  },
];

const singleIncome = {
  _id: "0000000000",
  date: "20.02.2021",
  category: "Дополнительные доходы",
  amount: 100,
  description: "вернули долг",
};

const singleExpense = {
  _id: "999999999",
  date: "25.02.2021",
  category: "Прочее",
  amount: 100,
  description: "дал в долг",
};

const balance = 55000;

export default function FillState() {
  const dispatch = useDispatch();

  dispatch(transactionsActions.addBalanceSuccess(balance));
  dispatch(transactionsActions.getIncomeSuccess({ data: arrayIncomes }));
  dispatch(transactionsActions.getExpenseSuccess({ data: arrayExpenses }));

  dispatch(transactionsActions.addIncomeSuccess(singleIncome));
  dispatch(transactionsActions.addExpenseSuccess(singleExpense));

  return console.log("------ State filled successful ------");
}
