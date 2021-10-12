import { transactionsActions, transactionsSelectors } from "./transactions";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";

const arrayExpenses = [
  {
    _id: "1111111111111111",
    amount: 200,
    date: "21.01.2021",
    category: "Продукты",
    description: "свинина",
  },
  {
    _id: "1211111111111111",
    amount: 300,
    date: "24.01.2021",
    category: "алкоголь",
    description: "капитан морган",
  },
  {
    _id: "1311111111111111",
    amount: 100,
    date: "21.02.2021",
    category: "Продукты",
    description: "борщевой набор",
  },
  {
    _id: "1411111111111111",
    amount: 50,
    date: "11.02.2021",
    category: "Развлечения",
    description: "Прогулка",
  },
  {
    _id: "1511111111111111",
    amount: 20,
    date: "15.02.2021",
    category: "Продукты",
    description: "зелень",
  },
  {
    _id: "1611111111111111",
    amount: 350,
    date: "15.01.2021",
    category: "Продукты",
    description: "сыр",
  },
  {
    _id: "1611111111111111",
    amount: 150,
    date: "27.09.2020",
    category: "алкоголь",
    description: "водка",
  },
  {
    _id: "1811111111111111",
    amount: 230,
    date: "13.11.2021",
    category: "Транспорт",
    description: "такси",
  },
  {
    _id: "1911111111111111",
    amount: 110,
    date: "22.05.2021",
    category: "Продукты",
    description: "Говядина",
  },
  {
    _id: "1121111111111111",
    amount: 550,
    date: "17.08.2021",
    category: "Прочее",
    description: "Ремонт",
  },
  {
    _id: "55551111111111111",
    amount: 2550,
    date: "17.10.2021",
    category: "Развлечения",
    description: "Днюха",
  },
  {
    _id: "1666611111111111",
    amount: 11550,
    date: "17.10.2021",
    category: "Прочее",
    description: "Ремонт",
  },
  {
    _id: "16781111111111",
    amount: 3550,
    date: "17.08.2021",
    category: "Здоровье",
    description: "Печень",
  },
];

const arrayIncomes = [
  {
    _id: "3331111111111111",
    amount: 20000,
    date: "31.10.2021",
    category: "ЗП",
    description: "моя",
  },
  {
    _id: "3311111111111111",
    amount: 1300,
    date: "24.10.2021",
    category: "Доп. доход",
    description: "лото",
  },
  {
    _id: "3321111111111111",
    amount: 20000,
    date: "31.09.2021",
    category: "ЗП",
    description: "моя",
  },
  {
    _id: "3341111111111111",
    amount: 1150,
    date: "10.09.2021",
    category: "ЗП",
    description: "жены",
  },
  {
    _id: "3351111111111111",
    amount: 22000,
    date: "31.08.2021",
    category: "ЗП",
    description: "моя",
  },
];

const singleIncome = {
  _id: "0000000000",
  date: "20.02.2021",
  category: "Доп. доход",
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
