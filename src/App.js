import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

// Расскоментировать. Исправить путь импорта, если нужно. Вставить компонент в раут

// const LoginPage = lazy(() => import("./pages/LoginPage" /* webpackChunkName: "login-page" */));
// const RegisterPage = lazy(() => import("./pages/RegisterPage" /* webpackChunkName: "register-page" */));
const TransactionsPage = lazy(() =>
  import("./pages/TransactionsPage" /* webpackChunkName: "transactions-page" */)
);
// const StatisticsPage = lazy(() => import("./pages/StatisticsPage" /* webpackChunkName: "statistics-page" */));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path="/login">{"LoginPage"}</Route>

          <Route path="/register">{"RegisterPage"}</Route>

          <Route path="/transactions">
            <TransactionsPage />
          </Route>

          <Route path="/statistics">{"StatisticsPage"}</Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
