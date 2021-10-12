import yearsToMonths from 'date-fns/yearsToMonths';
import yearsToQuarters from 'date-fns/yearsToQuarters/index';
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPortal } from 'victory';
import styles from './Chart.module.scss'


function Chart ({data}) {

    return (
        <div className={styles.chart}>
            <VictoryChart
                animate={{duration: 500}}
                singleQuadrantDomainPadding={{ x: false }}
                padding={25}
                domainPadding={{ x: 20, y: 20 }}
                // maxDomain={{ x: 10 }}
            >
            <VictoryAxis tickCount={8} style={{tickLabels: {fontSize: 11, padding:5}}}/>
            <VictoryPortal>
            <VictoryBar 
                verticalAnchor= "center"
                labels={({ datum }) => `${datum.amt} грн`}
                cornerRadius={{ top: 10 }}
                data={data}
                x="name"
                y="amt"
                style={{
                    data: {
                        width: 30,                   
                        fill: ({ index }) => +index % 3 === 0  ? "#FF751D" : "#FFDAC0",
                    },
                    labels: {
                        fontSize: 9,
                        fill: '#52555F',
                    },
                    text: {fontSize: 10}
                }}
            />
            </VictoryPortal>
            </VictoryChart>
      </div>
    );
  }


export default Chart;