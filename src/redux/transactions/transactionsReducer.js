import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import transactionsActions from "./transactionsActions";

 export const CATEGORIES_LIST = {
   incomes: [
  { "id": 13, "category": "ЗП"  },
  { "id": 14, "category": "Доп. доход" },
   ],
   expenses: [
  { "id": 1, "category": "Техника"  },
  { "id": 2, "category": "Транспорт" },
  { "id": 3, "category":  "Образование"},
  { "id": 4, "category":  "Всё для дома"},
  { "id": 5, "category": "Спорт и хобби" },
  { "id": 6, "category": "Здоровье" },
  { "id": 7, "category": "Коммуналка и связь" },
  { "id": 8, "category":  "Образование" },
  { "id": 9, "category": "Прочее" },
  { "id": 10, "category": "Развлечения" },
  { "id": 11, "category": "Алкоголь" },
  { "id": 12, "category": "Продукты" },
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
