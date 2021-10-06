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

const arrayIncomes = [
  {
    _id: "1111111111111111",
    amount: 200,
    date: "21.01.2021",
    category: "Продукты",
    description: "свинина",
  },
  {
    _id: "1211111111111111",
    amount: 300,
    date: "24.01.2021",
    category: "алкоголь",
    description: "капитан морган",
  },
  {
    _id: "1311111111111111",
    amount: 100,
    date: "21.02.2021",
    category: "Продукты",
    description: "борщевой набор",
  },
  {
    _id: "1411111111111111",
    amount: 50,
    date: "11.02.2021",
    category: "Развлечения",
    description: "Прогулка",
  },
  {
    _id: "1511111111111111",
    amount: 20,
    date: "15.02.2021",
    category: "Продукты",
    description: "зелень",
  },
  {
    _id: "1611111111111111",
    amount: 350,
    date: "15.01.2021",
    category: "Продукты",
    description: "сыр",
  },
  {
    _id: "1611111111111111",
    amount: 150,
    date: "27.09.2020",
    category: "алкоголь",
    description: "водка",
  },
  {
    _id: "1811111111111111",
    amount: 230,
    date: "13.11.2021",
    category: "Транспорт",
    description: "такси",
  },
  {
    _id: "1911111111111111",
    amount: 110,
    date: "22.05.2021",
    category: "Продукты",
    description: "Говядина",
  },
  {
    _id: "1121111111111111",
    amount: 550,
    date: "17.05.2021",
    category: "Прочее",
    description: "Ремонт",
  },
];

const arrayExpenses = [
  {
    _id: "3331111111111111",
    amount: 20000,
    date: "31.01.2021",
    category: "ЗП",
    description: "моя",
  },
  {
    _id: "3311111111111111",
    amount: 1300,
    date: "24.01.2021",
    category: "Доп. доход",
    description: "лото",
  },
  {
    _id: "3321111111111111",
    amount: 20000,
    date: "31.02.2021",
    category: "ЗП",
    description: "моя",
  },
  {
    _id: "3341111111111111",
    amount: 1150,
    date: "10.02.2021",
    category: "ЗП",
    description: "жены",
  },
  {
    _id: "3351111111111111",
    amount: 22000,
    date: "31.03.2021",
    category: "ЗП",
    description: "моя",
  },
];

const getMonthFromDate = (date) => {
  return `${date[3]}${date[4]}`;
};

const findMonthAmount = (number, transactions) => {
  let monthSum = 0;
  transactions.forEach(({ date, amount }) => {
    const currentMonth = getMonthFromDate(date);

    if (+currentMonth == number) {
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
