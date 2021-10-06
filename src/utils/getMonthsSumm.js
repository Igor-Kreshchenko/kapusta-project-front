const MONTHS = [
  {
    name: "январь",
    number: "01",
  },
  {
    name: "февраль",
    number: "02",
  },
  {
    name: "март",
    number: "03",
  },
  {
    name: "апрель",
    number: "04",
  },
  {
    name: "май",
    number: "05",
  },
  {
    name: "июнь",
    number: "06",
  },
  {
    name: "июль",
    number: "07",
  },
  {
    name: "август",
    number: "08",
  },
  {
    name: "сентябрь",
    number: "09",
  },
  {
    name: "октябрь",
    number: "10",
  },
  {
    name: "ноябрь",
    number: "11",
  },
  {
    name: "декабрь",
    number: "12",
  },
];

const getMonthsSum = (transactions) => {
  return transactions.reduce((obj, transaction) => {
    const monthNumber = `${transaction.date[3]}${transaction.date[4]}`;
    const { name } = MONTHS.find((month) => month.number === monthNumber);

    if (!obj[name]) {
      obj[name] = transaction.amount;
    } else {
      obj[name] = obj[name] + transaction.amount;
    }

    return obj;
  }, {});
};

export default getMonthsSum;
