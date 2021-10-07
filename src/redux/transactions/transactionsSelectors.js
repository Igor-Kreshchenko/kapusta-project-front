import { createSelector } from "reselect";

const getBalance = (state) => state.transactions.balance;
const getIncomes = (state) => state.transactions.incomes;
const getExpenses = (state) => state.transactions.expenses;
const getLoading = (state) => state.transactions.isLoading;
const getError = (state) => state.transactions.error;
const getIncCategories = (state) => state.transactions.categories.incomes;
const getExpCategories = (state) => state.transactions.categories.expenses;

const getAllTransactions = createSelector(
  [getIncomes, getExpenses],
  (incomes, expenses) => ({ incomes, expenses })
);

const transactionsSelectors = {
  getBalance,
  getIncomes,
  getExpenses,
  getLoading,
  getError,
  getAllTransactions,
  getIncCategories,
  getExpCategories,
};

export default transactionsSelectors;
