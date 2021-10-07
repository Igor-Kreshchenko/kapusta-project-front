import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FillState from "./redux/testArrays";
import Header from "./components/Header";

// Расскоментировать. Исправить путь импорта, если нужно. Вставить компонент в раут

const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login-page" */)
);
const SignupPage = lazy(() =>
  import("./pages/SignupPage" /* webpackChunkName: "signup-page" */)
);
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
      <Header />

      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <SignupPage />
          </Route>

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
