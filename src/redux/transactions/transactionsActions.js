import { createAction } from "@reduxjs/toolkit";

const addIncomeRequest = createAction("transactions/addIncomeRequest");
const addIncomeSuccess = createAction("transactions/addIncomeSuccess");
const addIncomeError = createAction("transactions/addIncomeError");

const addExpensesRequest = createAction("transactions/addExpensesRequest");
const addExpensesSuccess = createAction("transactions/addExpensesSuccess");
const addExpensesError = createAction("transactions/addExpensesError");

const addBalanceRequest = createAction("transactions/addBalanceRequest");
const addBalanceSuccess = createAction("transactions/addBalanceSuccess");
const addBalanceError = createAction("transactions/addBalanceError");

const getIncomeRequest = createAction("transactions/getIncomeRequest");
const getIncomeSuccess = createAction("transactions/getIncomeSuccess");
const getIncomeError = createAction("transactions/getIncomeError");

const getExpensesRequest = createAction("transactions/getExpensesRequest");
const getExpensesSuccess = createAction("transactions/getExpensesSuccess");
const getExpensesError = createAction("transactions/getExpensesError");

const getBalanceRequest = createAction("transactions/getBalanceRequest");
const getBalanceSuccess = createAction("transactions/getBalanceSuccess");
const getBalanceError = createAction("transactions/getBalanceError");

const getAllTransactionsRequest = createAction(
  "transactions/getAllTransactionsRequest"
);
const getAllTransactionsSuccess = createAction(
  "transactions/getAllTransactionsSuccess"
);
const getAllTransactionsError = createAction(
  "transactions/getAllTransactionsError"
);

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
  addExpensesRequest,
  addExpensesSuccess,
  addExpensesError,
  addBalanceRequest,
  addBalanceSuccess,
  addBalanceError,
  getIncomeRequest,
  getIncomeSuccess,
  getIncomeError,
  getExpensesRequest,
  getExpensesSuccess,
  getExpensesError,
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceError,
  getAllTransactionsRequest,
  getAllTransactionsSuccess,
  getAllTransactionsError,
  deleteIncomeTransactionRequest,
  deleteIncomeTransactionSuccess,
  deleteIncomeTransactionError,
  deleteExpenseTransactionRequest,
  deleteExpenseTransactionSuccess,
  deleteExpenseTransactionError,
};

export default transactionsActions;
