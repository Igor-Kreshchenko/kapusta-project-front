import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContainerHome from "./components/Container/ContainerHome";
import ContainerMain from "./components/Container/ContainerMain";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import FillState from "./redux/testArrays";

// Расскоментировать. Исправить путь импорта, если нужно. Вставить компонент в раут

// const LoginPage = lazy(() => import("./pages/LoginPage" /* webpackChunkName: "login-page" */));
// const RegisterPage = lazy(() => import("./pages/RegisterPage" /* webpackChunkName: "register-page" */));
const TransactionsPage = lazy(() =>
  import("./pages/TransactionsPage" /* webpackChunkName: "transactions-page" */)
);
const StatisticsPage = lazy(() =>
  import(
    "./pages/StatisticsPage/StatisticsPage" /* webpackChunkName: "statistics-page" */
  )
);

function App() {
  // Запускает временную функцию для заполнения стейта
  FillState();
  // ---------
  return (
    <div className="App">
      {/* <CategoriesList/> */}

      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path="/login">{"LoginPage"}</Route>

          <Route path="/register">{"RegisterPage"}</Route>

          <Route path="/transactions">
            <TransactionsPage />
          </Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>

          {/* Временно редирект на страницу транзакций */}
          <Redirect to="/transactions" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
