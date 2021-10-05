import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Transactions.scss";

const Transactions = () => {
  return (
    <div className="container">
      <Tabs>
        <TabList>
          <Tab>Расход</Tab>
          <Tab>Доход</Tab>
        </TabList>

        <TabPanel>
          <div className="transactions__container">
            <form className="transactions__form">
              <div className="datapicker">
                <div>DD.MM.YYYY</div>
              </div>

              <div className="transactions__form-input">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>

              <div className="transactions__form-btn">
                <button className="transactions__form-btn-enter">Ввод</button>
                <button className="transactions__form-btn-clear">
                  Очистить
                </button>
              </div>
            </form>
          </div>
          <div className="transactions__main">
            <div className="transactions__table">
              <div className="transactions__table-head">
                <div className="transactions__table-title">Дата</div>
                <div className="transactions__table-title">Описание</div>
                <div className="transactions__table-title">Категория</div>
                <div className="transactions__table-title">Сумма</div>
                <div className="transactions__table-title" />
              </div>

              <div>
                <ul className="transactions__table-list">
                  <li className="transactions__table-item">
                    <span>DD.MM.YYYY</span>
                    <span>asd</span>
                    <span>asd</span>
                    <span>asd</span>
                  </li>
                  <li className="transactions__table-item">
                    <span>DD.MM.YYYY</span>
                    <span>asd</span>
                    <span>asd</span>
                    <span>asd</span>
                  </li>

                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                  <li className="transactions__table-item"></li>
                </ul>
              </div>
            </div>

            <div className="transactions__summary">
              <h4>Сводка</h4>
              <div>Ноябрь</div>
              <div>Октябрь</div>
              <div>Сентябрь</div>
              <div>Август</div>
              <div>Июль</div>
              <div>Июнь</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Transactions;
