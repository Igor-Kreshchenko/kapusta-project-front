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

const getMonthFromDate = (date) => {
  return `${date[3]}${date[4]}`;
};

const findMonthAmount = (number, transactions) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  let monthSum = 0;
  transactions.forEach(({ date, amount }) => {
    const currentMonth = getMonthFromDate(date);

    if (+currentMonth == number && date.includes(currentYear)) {
      monthSum += amount;
    }
  });
  return Number.parseInt(monthSum).toLocaleString("ru");
};

const cutAndSortArray = (array) => {
  const reversedArray = array.reverse();
  return reversedArray.slice(0, 6);
};

const createMonthsWithSum = (transactions, currentMonth) => {
  let sum = 0;
  let monthWithSum = [];

  MONTHS.forEach(({ number, name }) => {
    if (number <= currentMonth) {
      sum = findMonthAmount(number, transactions);
      const month = {
        name,
        sum,
      };
      monthWithSum.push(month);
    }
  });

  return cutAndSortArray(monthWithSum);
};

export default createMonthsWithSum;
