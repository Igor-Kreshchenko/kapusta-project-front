import { createAction } from "@reduxjs/toolkit";

const addIncomeRequest = createAction("transactions/addIncomeRequest");
const addIncomeSuccess = createAction("transactions/addIncomeSuccess");
const addIncomeError = createAction("transactions/addIncomeError");

const addExpenseRequest = createAction("transactions/addExpensesRequest");
const addExpenseSuccess = createAction("transactions/addExpensesSuccess");
const addExpenseError = createAction("transactions/addExpensesError");

const addBalanceRequest = createAction("transactions/addBalanceRequest");
const addBalanceSuccess = createAction("transactions/addBalanceSuccess");
const addBalanceError = createAction("transactions/addBalanceError");

const getIncomeRequest = createAction("transactions/getIncomeRequest");
const getIncomeSuccess = createAction("transactions/getIncomeSuccess");
const getIncomeError = createAction("transactions/getIncomeError");

const getExpenseRequest = createAction("transactions/getExpenseRequest");
const getExpenseSuccess = createAction("transactions/getExpenseSuccess");
const getExpenseError = createAction("transactions/getExpenseError");

const getBalanceRequest = createAction("transactions/getBalanceRequest");
const getBalanceSuccess = createAction("transactions/getBalanceSuccess");
const getBalanceError = createAction("transactions/getBalanceError");

const deleteIncomeTransactionRequest = createAction(
  "transactions/deleteIncomeTransactionRequest"
);
const deleteIncomeTransactionSuccess = createAction(
  "transactions/deleteIncomeTransactionSuccess"
);
const deleteIncomeTransactionError = createAction(
  "transactions/deleteIncomeTransactionError"
);

const deleteExpenseTransactionRequest = createAction(
  "transactions/deleteExpenseTransactionRequest"
);
const deleteExpenseTransactionSuccess = createAction(
  "transactions/deleteExpenseTransactionSuccess"
);
const deleteExpenseTransactionError = createAction(
  "transactions/deleteExpenseTransactionError"
);

const transactionsActions = {
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getIncomeRequest,
  getIncomeSuccess,
  getIncomeError,
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  deleteIncomeTransactionRequest,
  deleteIncomeTransactionSuccess,
  deleteIncomeTransactionError,
  deleteExpenseTransactionRequest,
  deleteExpenseTransactionSuccess,
  deleteExpenseTransactionError,
};

export default transactionsActions;
