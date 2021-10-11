import axios from "axios";
import transactionsActions from "./transactionsActions";

axios.defaults.baseURL = "http://localhost:4000/api/";

const getBalance = () => async (dispatch) => {
  dispatch(transactionsActions.getBalanceRequest());

  try {
    const response = await axios.get("./balance");
    dispatch(transactionsActions.getBalanceSuccess(response.data));
  } catch (error) {
    dispatch(transactionsActions.getBalanceError(error.message));
  }
};

// Операция ничего не получает в параметрах. Делает запрос на актуальный баланс,
// и передает его в редюсер.

const getTransactionsByType = (type) => async (dispatch) => {
  if (type === "incomes") {
    dispatch(transactionsActions.getIncomeRequest());

    try {
      const response = await axios.get("./transactions/incomes");
      dispatch(transactionsActions.getIncomeSuccess(response.data));
    } catch (error) {
      dispatch(transactionsActions.getIncomesError(error.message));
    }

    return;
  }

  dispatch(transactionsActions.getExpensesRequest());

  try {
    const response = await axios.get("./transactions/expenses");
    dispatch(transactionsActions.getExpensesSuccess(response.data));
  } catch (error) {
    dispatch(transactionsActions.getExpensesError(error.message));
  }
};

// Операция ожидает тип транзакций "incomes или expenses" и в зависимости от него формирует запрос на бэк,
// бэк возвращает желаемый массив за актуальный год и операция передает его в редюсер.

const getAllTransactionByMonth =
  ({ month, year }) =>
  async (dispatch) => {
    dispatch(transactionsActions.getAllTransactionsRequest());

    try {
      const response = await axios.get(`./transactions/?${month}&${year}`);
      dispatch(transactionsActions.getIncomeSuccess(response.data));
    } catch (error) {
      dispatch(transactionsActions.getIncomesError(error.message));
    }
  };

//   Операция ожидает два параметра "месяц и год", пока не знаю в каком формате, и дальше передает эти данные в юрл строку,
//  полсе получения нужного массива передает его в редюсер.

const addTransaction =
  ({ type, date, amount, category, description }) =>
  async (dispatch) => {
    const transaction = {
      type,
      date,
      amount,
      category,
      description,
    };

    if (type === "income") {
      dispatch(transactionsActions.addIncomeRequest());

      try {
        const response = await axios.patch(
          "./transactions/incomes",
          transaction
        );
        dispatch(transactionsActions.addIncomeSuccess(response.data));
      } catch (error) {
        dispatch(transactionsActions.addIncomeError(error.message));
      }

      return;
    }

    dispatch(transactionsActions.addExpensesRequest());

    try {
      const response = await axios.patch(
        "./transactions/expenses",
        transaction
      );
      dispatch(transactionsActions.addExpensesSuccess(response.data));
    } catch (error) {
      dispatch(transactionsActions.addExpensesError(error.message));
    }
  };

// Операция ожидает тип транзакции "incomes или expenses", это нужно для бэка.
// date, amount, category и description нужно передать в виде обьекта и его мы передадим на бэк,
//  если операция успешна то с бека вернётся таже транзакция, но с айдишником и мы её возвращаем в редюсер.

const addBalance = (balance) => async (dispatch) => {
  dispatch(transactionsActions.addBalanceRequest());

  try {
    const response = await axios.patch("./balance", balance);
    dispatch(transactionsActions.addBalanceSuccess(response.data));
  } catch (error) {
    dispatch(transactionsActions.addBalanceError(error.message));
  }
};

// Операция ожидает баланс, еще не знаю в каком виде, и передает его на бэк,
// затем бэк его обновляет и возвращает назад, после чего он добавляется в редюсер)

const deleteTransaction =
  ({ type, id, amount }) =>
  async (dispatch) => {
    if (type === "incomes") {
      dispatch(transactionsActions.deleteIncomeTransactionRequest());

      try {
        console.log(type);
        await axios.patch(`./transactions/${type}/${id}`);
        dispatch(
          transactionsActions.deleteIncomeTransactionSuccess({ id, amount })
        );
      } catch (error) {
        dispatch(
          transactionsActions.deleteIncomeTransactionError(error.message)
        );
      }

      return;
    }

    dispatch(transactionsActions.deleteExpenseTransactionRequest());

    try {
      await axios.patch(`./transactions/${type}/${id}`);
      dispatch(
        transactionsActions.deleteExpensesTransactionSuccess({ id, amount })
      );
    } catch (error) {
      dispatch(
        transactionsActions.deleteExpenseTransactionError(error.message)
      );
    }
  };

//   Операция ожидает тип транзакции, её айди и свойство 'amount', в зависимости от типа определяется тип акшенов
//   и делаеться запрос на бэк, если успешно то передает айди и amount в редюсер.

const transactionsOps = {
  getBalance,
  getTransactionsByType,
  getAllTransactionByMonth,
  addBalance,
  addTransaction,
  deleteTransaction,
};

export default transactionsOps;
