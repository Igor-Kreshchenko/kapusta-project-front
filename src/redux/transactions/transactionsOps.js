import axios from "axios";
import transactionsActions from "./transactionsActions";

axios.defaults.baseURL = "https://kapusta-app.herokuapp.com/api";

const getBalance = () => async (dispatch) => {
  dispatch(transactionsActions.getBalanceRequest());

  try {
    const response = await axios.get("./transactions/balance");

    dispatch(transactionsActions.getBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(transactionsActions.getBalanceError(error.message));
  }
};

// Операция ничего не получает в параметрах. Делает запрос на актуальный баланс,
// и передает его в редюсер.
// await dispatch(transactionsOps.getBalance());

const getTransactionsByType =
  ({ type }) =>
  async (dispatch) => {
    const UpperCasedType = type[0].toUpperCase() + type.slice(1);
    const actionRequestType = `get${UpperCasedType}Request`;
    const actionSuccessType = `get${UpperCasedType}Success`;
    const actionErrorType = `get${UpperCasedType}Error`;

    dispatch(transactionsActions[actionRequestType]());

    try {
      const response = await axios.get(`./transactions/${type}`);

      dispatch(transactionsActions[actionSuccessType](response.data));
    } catch (error) {
      dispatch(transactionsActions[actionErrorType](error.message));
    }
  };

// Операция ожидает тип транзакций "income или expense" и в зависимости от него формирует запрос на бэк,
// бэк возвращает желаемый массив за актуальный год и операция передает его в редюсер.
// await dispatch(transactionsOps.getTransactionsByType({ type: "expense" }));
// await dispatch(transactionsOps.getTransactionsByType({ type: "income" }));

const getAllTransactionByMonth =
  ({ month, year }) =>
  async (dispatch) => {
    const types = ["income", "expense"];
    types.forEach(async (type) => {
      const UpperCasedType = type[0].toUpperCase() + type.slice(1);
      const actionRequestType = `get${UpperCasedType}Request`;
      const actionSuccessType = `get${UpperCasedType}Success`;
      const actionErrorType = `get${UpperCasedType}Error`;

      dispatch(transactionsActions[actionRequestType]());
      try {
        const response = await axios.get(
          `./transactions/${type}?month=${month}&year=${year}`
        );
        dispatch(transactionsActions[actionSuccessType](response.data));
      } catch (error) {
        dispatch(transactionsActions[actionErrorType](error.message));
      }
    });
  };

//   Операция ожидает два параметра "месяц и год" в обьекте и дальше передает эти данные в юрл строку,
//  деалает два запроса и полсе получения нужного массива передает его в редюсер.
// await transactionsOps.getAllTransactionByMonth({ month: 10, year: 2021 })

const addTransaction =
  ({ type, date, amount, category, description }) =>
  async (dispatch) => {
    const transaction = {
      date,
      amount,
      category,
      description,
    };

    const UpperCasedType = type[0].toUpperCase() + type.slice(1);
    const actionRequestType = `add${UpperCasedType}Request`;
    const actionSuccessType = `add${UpperCasedType}Success`;
    const actionErrorType = `add${UpperCasedType}Error`;

    dispatch(transactionsActions[actionRequestType]());

    try {
      const response = await axios.patch(`./transactions/${type}`, transaction);

      dispatch(transactionsActions[actionSuccessType](response.data.body));
    } catch (error) {
      console.log(error)
      dispatch(transactionsActions[actionErrorType](error.message));
    }
  };

// Операция ожидает тип транзакции "income или expense", это нужно для бэка.
// type, date, amount, category и description нужно передать в виде обьекта и его мы передадим на бэк,
//  если операция успешна то с бека вернётся таже транзакция, но с айдишником и мы её возвращаем в редюсер.
// await dispatch(transactionsOps.addTransaction({type: "expense", date: "11.10.2021", amount: 1000, category: "алкоголь", description: "обмыл зп"});
// await dispatch(transactionsOps.addTransaction({type: "income", date: "11.10.2021", amount: 22000, category: "ЗП", description: "моя"});

const addBalance = (balance) => async (dispatch) => {
  dispatch(transactionsActions.addBalanceRequest());

  try {
    const response = await axios.patch("./transactions/balance", { balance });

    dispatch(transactionsActions.addBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(transactionsActions.addBalanceError(error.message));
  }
};

// Операция ожидает баланс, и передает его на бэк,
// затем бэк его обновляет и возвращает назад, после чего он добавляется в редюсер)
// await dispatch(transactionsOps.addBalance(50000));

const deleteTransaction =
  ({ type, id }) =>
  async (dispatch) => {
    const UpperCasedType = type[0].toUpperCase() + type.slice(1);
    const actionRequestType = `delete${UpperCasedType}TransactionRequest`;
    const actionSuccessType = `delete${UpperCasedType}TransactionSuccess`;
    const actionErrorType = `delete${UpperCasedType}TransactionError`;

    dispatch(transactionsActions[actionRequestType]());

    try {
      const response = await axios.delete(`./transactions/${type}/${id}`);

      dispatch(transactionsActions[actionSuccessType](response.data));
    } catch (error) {
      dispatch(transactionsActions[actionErrorType](error.message));
    }
  };

//   Операция ожидает тип транзакции и её id (не _id), в зависимости от типа определяется тип акшенов
//   и делаеться запрос на бэк, если успешно то бэк возвращает в ответе удаленную транзакцию и её передаем в редюсер.
// await dispatch(transactionsOps.deleteTransaction({ type: "income", id: "97ef2039-49b6-4ca3-9d81-18ef97567340" }));
// await dispatch(transactionsOps.deleteTransaction({ type: "expense", id: "bead5408-a083-410d-916f-7ce6dbc2c5c2",}));

const transactionsOps = {
  getBalance,
  getTransactionsByType,
  getAllTransactionByMonth,
  addBalance,
  addTransaction,
  deleteTransaction,
};

export default transactionsOps;
