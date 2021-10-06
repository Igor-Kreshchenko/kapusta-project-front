import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import transactionsActions from "./transactionsActions";

const balance = createReducer(0, {
  [transactionsActions.getBalanceSuccess]: (_, { payload }) => payload,
  [transactionsActions.addBalanceSuccess]: (_, { payload }) => payload,
  [transactionsActions.addIncomeSuccess]: (state, { payload }) =>
    state + payload.amount,
  [transactionsActions.addExpensesSuccess]: (state, { payload }) =>
    state - payload.amount,
  [transactionsActions.deleteIncomeTransactionSuccess]: (state, { payload }) =>
    state - payload.amount,
  [transactionsActions.deleteExpenseTransactionSuccess]: (state, { payload }) =>
    state + payload.amount,
});

const incomes = createReducer([], {
  [transactionsActions.getIncomeSuccess]: (_, { payload }) => [...payload],
  [transactionsActions.addIncomeSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.getAllTransactionsSuccess]: (_, { payload }) => [
    ...payload.incomes,
  ],
  [transactionsActions.deleteIncomeTransactionSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload.id),
});

const expenses = createReducer([], {
  [transactionsActions.getExpensesSuccess]: (_, { payload }) => [...payload],
  [transactionsActions.addExpensesSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.getAllTransactionsSuccess]: (_, { payload }) => [
    ...payload.expenses,
  ],
  [transactionsActions.deleteExpenseTransactionSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload.id),
});

const error = createReducer(null, {
  [transactionsActions.addIncomeError]: (_, { payload }) => payload,
  [transactionsActions.addExpensesError]: (_, { payload }) => payload,
  [transactionsActions.addBalanceError]: (_, { payload }) => payload,
  [transactionsActions.getIncomeError]: (_, { payload }) => payload,
  [transactionsActions.getExpensesError]: (_, { payload }) => payload,
  [transactionsActions.getBalanceError]: (_, { payload }) => payload,
  [transactionsActions.getAllTransactionsError]: (_, { payload }) => payload,
  [transactionsActions.deleteIncomeTransactionError]: (_, { payload }) =>
    payload,
  [transactionsActions.deleteExpenseTransactionError]: (_, { payload }) =>
    payload,
  [transactionsActions.addIncomeSuccess]: () => null,
  [transactionsActions.addExpensesSuccess]: () => null,
  [transactionsActions.addBalanceSuccess]: () => null,
  [transactionsActions.getIncomeSuccess]: () => null,
  [transactionsActions.getExpensesSuccess]: () => null,
  [transactionsActions.getBalanceSuccess]: () => null,
  [transactionsActions.getAllTransactionsSuccess]: () => null,
  [transactionsActions.deleteIncomeTransactionSuccess]: () => null,
  [transactionsActions.deleteExpenseTransactionSuccess]: () => null,
});

const isLoading = createReducer(false, {
  [transactionsActions.addIncomeRequest]: () => true,
  [transactionsActions.addIncomeSuccess]: () => false,
  [transactionsActions.addIncomeError]: () => false,
  [transactionsActions.addExpensesRequest]: () => true,
  [transactionsActions.addExpensesSuccess]: () => false,
  [transactionsActions.addExpensesError]: () => false,
  [transactionsActions.addBalanceRequest]: () => true,
  [transactionsActions.addBalanceSuccess]: () => false,
  [transactionsActions.addBalanceError]: () => false,
  [transactionsActions.getIncomeRequest]: () => true,
  [transactionsActions.getIncomeSuccess]: () => false,
  [transactionsActions.getIncomeError]: () => false,
  [transactionsActions.getExpensesRequest]: () => true,
  [transactionsActions.getExpensesSuccess]: () => false,
  [transactionsActions.getExpensesError]: () => false,
  [transactionsActions.getBalanceRequest]: () => true,
  [transactionsActions.getBalanceSuccess]: () => false,
  [transactionsActions.getBalanceError]: () => false,
  [transactionsActions.getAllTransactionsRequest]: () => true,
  [transactionsActions.getAllTransactionsSuccess]: () => false,
  [transactionsActions.getAllTransactionsError]: () => false,
  [transactionsActions.deleteIncomeTransactionRequest]: () => true,
  [transactionsActions.deleteIncomeTransactionSuccess]: () => false,
  [transactionsActions.deleteIncomeTransactionError]: () => false,
  [transactionsActions.deleteExpenseTransactionRequest]: () => true,
  [transactionsActions.deleteExpenseTransactionSuccess]: () => false,
  [transactionsActions.deleteExpenseTransactionError]: () => false,
});

export default combineReducers({
  balance,
  incomes,
  expenses,
  error,
  isLoading,
});
