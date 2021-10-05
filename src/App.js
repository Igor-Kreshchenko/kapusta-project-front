import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import FormLogin from "./components/Form/FormLogin";

// Расскоментировать. Исправить путь импорта, если нужно. Вставить компонент в раут

// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const TransactionsPage = lazy(() => import("./pages/TransactionsPage"));
// const StatisticsPage = lazy(() => import("./pages/HomePage/StatisticsPage"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage"));

function App() {
  return (
    <div className="App">
      {/* <CategoriesList/> */}
      <FormLogin />
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path="/login">{"LoginPage"}</Route>

          <Route path="/register">{"RegisterPage"}</Route>

          <Route path="/transactions">{"TransactionsPage"}</Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
