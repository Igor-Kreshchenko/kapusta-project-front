import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import transactionsActions from "./transactionsActions";

const CATEGORIES_LIST = {
  incomes: ["ЗП", "Доп. доход"],
  expenses: [
    "Транспорт",
    "Продукты",
    "Алкоголь",
    "Развлечения",
    "Всё для дома",
    "Техника",
    "Коммуналка, связь",
    "Спорт, хобби",
    "Образование",
    "Прочее",
  ],
};

const balance = createReducer(0, {
  [transactionsActions.getBalanceSuccess]: (_, { payload }) => payload,
  [transactionsActions.addBalanceSuccess]: (_, { payload }) => payload,
  [transactionsActions.addIncomeSuccess]: (state, { payload }) =>
    state + payload.amount,
  [transactionsActions.addExpenseSuccess]: (state, { payload }) =>
    state - payload.amount,
  [transactionsActions.deleteIncomeTransactionSuccess]: (state, { payload }) =>
    state - payload.amount,
  [transactionsActions.deleteExpenseTransactionSuccess]: (state, { payload }) =>
    state + payload.amount,
});

const incomes = createReducer([], {
  [transactionsActions.getIncomeSuccess]: (_, { payload }) => [...payload.data],
  [transactionsActions.addIncomeSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.deleteIncomeTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

const expenses = createReducer([], {
  [transactionsActions.getExpenseSuccess]: (_, { payload }) => [
    ...payload.data,
  ],
  [transactionsActions.addExpenseSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.deleteExpenseTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

const error = createReducer(null, {
  [transactionsActions.addIncomeError]: (_, { payload }) => payload,
  [transactionsActions.addExpenseError]: (_, { payload }) => payload,
  [transactionsActions.addBalanceError]: (_, { payload }) => payload,
  [transactionsActions.getIncomeError]: (_, { payload }) => payload,
  [transactionsActions.getExpenseError]: (_, { payload }) => payload,
  [transactionsActions.getBalanceError]: (_, { payload }) => payload,
  [transactionsActions.deleteIncomeTransactionError]: (_, { payload }) =>
    payload,
  [transactionsActions.deleteExpenseTransactionError]: (_, { payload }) =>
    payload,
  [transactionsActions.addIncomeSuccess]: () => null,
  [transactionsActions.addExpenseSuccess]: () => null,
  [transactionsActions.addBalanceSuccess]: () => null,
  [transactionsActions.getIncomeSuccess]: () => null,
  [transactionsActions.getExpenseSuccess]: () => null,
  [transactionsActions.getBalanceSuccess]: () => null,
  [transactionsActions.deleteIncomeTransactionSuccess]: () => null,
  [transactionsActions.deleteExpenseTransactionSuccess]: () => null,
});

const isLoading = createReducer(false, {
  [transactionsActions.addIncomeRequest]: () => true,
  [transactionsActions.addIncomeSuccess]: () => false,
  [transactionsActions.addIncomeError]: () => false,
  [transactionsActions.addExpenseRequest]: () => true,
  [transactionsActions.addExpenseSuccess]: () => false,
  [transactionsActions.addExpenseError]: () => false,
  [transactionsActions.addBalanceRequest]: () => true,
  [transactionsActions.addBalanceSuccess]: () => false,
  [transactionsActions.addBalanceError]: () => false,
  [transactionsActions.getIncomeRequest]: () => true,
  [transactionsActions.getIncomeSuccess]: () => false,
  [transactionsActions.getIncomeError]: () => false,
  [transactionsActions.getExpenseRequest]: () => true,
  [transactionsActions.getExpenseSuccess]: () => false,
  [transactionsActions.getExpenseError]: () => false,
  [transactionsActions.getBalanceRequest]: () => true,
  [transactionsActions.getBalanceSuccess]: () => false,
  [transactionsActions.getBalanceError]: () => false,
  [transactionsActions.deleteIncomeTransactionRequest]: () => true,
  [transactionsActions.deleteIncomeTransactionSuccess]: () => false,
  [transactionsActions.deleteIncomeTransactionError]: () => false,
  [transactionsActions.deleteExpenseTransactionRequest]: () => true,
  [transactionsActions.deleteExpenseTransactionSuccess]: () => false,
  [transactionsActions.deleteExpenseTransactionError]: () => false,
});

const categories = createReducer(CATEGORIES_LIST, {});

export default combineReducers({
  balance,
  incomes,
  expenses,
  categories,
  error,
  isLoading,
});
