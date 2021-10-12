import CategoriesList from "../CategoriesList";
const arrayExpenses = [
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
    category: "Алкоголь",
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
    _id: "1611111111111011",
    amount: 350,
    date: "15.01.2021",
    category: "Продукты",
    description: "сыр",
  },
  {
    _id: "1611111111111111",
    amount: 150,
    date: "27.09.2020",
    category: "Алкоголь",
    description: "водка",
  },
  {
    _id: "1811111111111111",
    amount: 230,
    date: "13.11.2021",
    category: "Алкоголь",
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
    date: "17.08.2021",
    category: "Прочее",
    description: "Ремонт",
  },
  {
    _id: "55551111111111111",
    amount: 2550,
    date: "17.10.2021",
    category: "Развлечения",
    description: "Днюха",
  },
  {
    _id: "1666611111111111",
    amount: 11550,
    date: "17.10.2021",
    category: "Прочее",
    description: "Ремонт",
  },
 
];

const Expenses = () => {
    return (
        <CategoriesList
            obj={arrayExpenses}/>
    )
}
export default Expenses;