import React from 'react';
import { Mobile, Default } from '../../utils/mediaQuery'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel,} from 'victory';
import styles from './Chart.module.scss'


function Chart ({data}) {

const width = Number(data.length) * 55 


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
             tickLabelComponent={<VictoryLabel textAnchor="center" dy={-20}/>}
            />
            

            <VictoryBar  
                horizontal             
                labels={({ datum }) => `${datum.amt} грн`}
                labelComponent={<VictoryLabel dy={-18} dx={-40}/>}
                cornerRadius={{ top: 10 }}
                data={data}
                x="name"
                y="amt" 
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
            >
            <VictoryAxis style={{tickLabels: {fontSize: 9, padding:5}}} axisComponent={<VictoryLabel  fill='#52555F'/>}/>

            <VictoryBar               
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
                }}/>
            </VictoryChart>
        </Default>
    </div>
    
)};


export default Chart;