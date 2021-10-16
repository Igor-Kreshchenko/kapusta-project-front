import React from 'react';
import { useSelector } from "react-redux";
import transactionsSelectors from "../../redux/transactions/transactionsSelectors"
import { Mobile, Default } from '../../utils/mediaQuery'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel,} from 'victory';
import styles from './Chart.module.scss'

function Chart ({category, type}) {
const transactions = useSelector(transactionsSelectors.getAllTransactions)

const getTransactionsByType = (arr) => {
   let getTransaction = {}
    if (type === 'expenses') {
        getTransaction = arr.expenses.filter(transaction => transaction.category === category)
        return getTransaction
    }
    getTransaction = arr.incomes.filter(transaction => transaction.category === category)
    return getTransaction
}

const allTransactionsByCategory = getTransactionsByType(transactions)

const totalSumByDescriptions = (description) => {
    let total = 0;
    allTransactionsByCategory.filter(transaction => transaction.description === description)
      .map(el => {
        total += el.amount;
      });
      return total;
  };

const allDescription = allTransactionsByCategory.reduce((descriptions, data) => {
    descriptions.push(...[data.description])
    return descriptions;},[])
  .filter((description, index, array) => array.indexOf(description) === index)


const allAmount = allDescription.map((description) => {
        const amount = totalSumByDescriptions(description)
        return {amount}
    });

const data = allDescription.map((description, index) => ({description, ...allAmount[index]}));

const width = Number(data.length) * 65

return (
    <div className={styles.chart}>

        <Mobile>
            <VictoryChart
                height={width}
                animate={{duration: 700}}
                singleQuadrantDomainPadding={{ x: false }}
                padding={20}
                // sortOrder="descending"
                domainPadding={{ x: 10}}
                // maxDomain={{ x: 10 }}
            >
            <VictoryAxis  verticalAnchor="end" dy={10} style={{tickLabels: {fontSize: 14, padding: 0, }}} axisComponent={<VictoryLabel/>}
             tickLabelComponent={<VictoryLabel style={ {textAnchor: "center"} } dy={-20}/>}
            />

            <VictoryBar
                horizontal
                labels={({ datum }) => `${datum.amount} грн`}
                labelComponent={<VictoryLabel dy={-18} dx={-40}/>}
                cornerRadius={{ top: 10 }}
                data={data}
                x="description"
                y="amount"

                style={{
                    data: {
                        width: 20,
                        fill: ({ index }) => +index % 3 === 0  ? "#FF751D" : "#FFDAC0",
                    },
                    labels: {
                        fontSize: 14,
                        fill: '#52555F',
                    },

                }}/>
            </VictoryChart>
        </Mobile>


        <Default>
            <VictoryChart
                width={width}
                animate={{duration: 700}}
                padding={25}
                domainPadding={{ x: 20}}
            >
            <VictoryAxis  width={38} style={{tickLabels: {fontSize: 8, padding:5, width:25}}} axisComponent={<VictoryLabel  fill='#52555F'/>}
            //  tickLabelComponent={<VictoryLabel />}
             />

            <VictoryBar
                labels={({ datum }) => `${datum.amount} грн`}
                cornerRadius={{ top: 10 }}
                data={data}
                x="description"
                y="amount"
                style={{
                    data: {
                        width: 30,
                        fill: ({ index }) => +index % 3 === 0  ? "#FF751D" : "#FFDAC0",
                    },
                    labels: {
                        fontSize: 9,
                        fill: '#52555F',
                    },
                }}/>
            </VictoryChart>
        </Default>
    </div>

)};


export default Chart;