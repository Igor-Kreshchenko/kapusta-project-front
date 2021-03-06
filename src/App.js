import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import routes from "./routes";
import { authOperations } from "./redux/auth";
import Loader from "./components/Loader";

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
const ExpensesFormPage = lazy(() =>
  import("./pages/ExpensesFormPage" /* webpackChunkName: "transactions-page" */)
);
const IncomesFormPage = lazy(() =>
  import("./pages/IncomesFormPage" /* webpackChunkName: "transactions-page" */)
);
const StatisticsPage = lazy(() =>
  import(
    "./pages/StatisticsPage/StatisticsPage" /* webpackChunkName: "statistics-page" */
  )
);
const VerifyPage = lazy(() =>
  import("./pages/VerifyPage" /* webpackChunkName: "verify-page" */)
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.transactions}
          >
            <LoginPage />
          </PublicRoute>

          <PublicRoute
            path={routes.signup}
            restricted
            redirectTo={routes.login}
          >
            <SignupPage />
          </PublicRoute>

          <PublicRoute
            path={routes.verify}
            restricted
            redirectTo={routes.transactions}
          >
            <VerifyPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.transactions}
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={routes.transactions} redirectTo={routes.login}>
            <TransactionsPage />
          </PrivateRoute>

          <PrivateRoute path={routes.statistics} redirectTo={routes.login}>
            <StatisticsPage />
          </PrivateRoute>

          <PrivateRoute path={routes.expenses_form} redirectTo={routes.login}>
            <ExpensesFormPage />
          </PrivateRoute>

          <PrivateRoute path={routes.incomes_form} redirectTo={routes.login}>
            <IncomesFormPage />
          </PrivateRoute>

          <Redirect to={routes.login} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
