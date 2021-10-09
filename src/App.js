import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import FillState from "./redux/testArrays";
import Header from "./components/Header";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import routes from './routes';

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
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.transactions}>
            <LoginPage />
          </PublicRoute>

           <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.transactions}>
            <SignupPage />
          </PublicRoute>

          <PrivateRoute
            path={routes.transactions}
            redirectTo={routes.login}>
            <TransactionsPage />
          </PrivateRoute>

           <PrivateRoute
            path={routes.statistics}
            redirectTo={routes.login}>
            <StatisticsPage />
          </PrivateRoute>

          {/* Временно редирект на страницу транзакций */}
          <Redirect to="/transactions" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
