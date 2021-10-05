import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import ContainerHome from "./components/Container/ContainerHome";
import ContainerMain from "./components/Container/ContainerMain";
import CategoriesList from "./components/CategoriesList/CategoriesList";


// Расскоментировать. Исправить путь импорта, если нужно. Вставить компонент в раут

// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const TransactionsPage = lazy(() => import("./pages/TransactionsPage"));
// const StatisticsPage = lazy(() => import("./pages/HomePage/StatisticsPage"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage/StatisticsPage"));

function App() {
  return (
    <div className="App">
      {/* <CategoriesList/> */}
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <ContainerHome>
            <Route path="/login">{"LoginPage"}</Route>

            <Route path="/register">{"RegisterPage"}</Route>
          </ContainerHome>

          {/* <ContainerMain> */}
          <Route path="/transactions">{"TransactionsPage"}</Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>
          {/* </ContainerMain> */}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
