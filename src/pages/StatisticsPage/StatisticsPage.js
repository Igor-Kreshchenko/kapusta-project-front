import React from "react";
import ToggleStatistics from "../../components/ToggleStatistics/ToggleStatistics"
import UserSummary from "../../components/UserSummary/UserSummary"
import BalancePanelOfReports from '../../components/BalancePanel/BalancePanelOfReports'
import css from "./StatisticsPage.module.scss";



const StatisticsPage = () => {

    return (
        <>
            <BalancePanelOfReports/>
            <UserSummary/>
            <ToggleStatistics />
            
        </>
        
           
    );
};

export default StatisticsPage;