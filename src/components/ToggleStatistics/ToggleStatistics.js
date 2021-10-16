import { lazy}from "react";
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import sprite from "../../images/icons/sprite_categories.svg";
import css from "./ToggleStatistics.module.scss";

const Expenses = lazy(() =>
  import("./Expenses")
);
const Income = lazy(() =>
  import("./Income")
);

const ToggleStatistics = ({data, setType}) => {

  const onClick = (type) => { 
    setType(type)
  } 
    const match = useRouteMatch();
    const location = useLocation();
    const activeLocation = location.pathname;
    return (
        
              <div className={css.wrapper}>
            <ul className={css.list}>
                <li  className={css.item}>
                    <Link to={`${match.url}`} onClick={() => onClick('expenses')}>
                        <svg width="10" height="15">
                            <use xlinkHref={`${sprite}#icon-arrow-left`} />
                        </svg>
                    </Link>
                </li>
                   <li className={css.item}>
            {activeLocation === "/statistics" ? (
              <h3 className={css.title}>Расходы</h3>
            ) : (
              <h3 className={css.title}>Доходы</h3>
            )}
                </li>
                 <li className={css.item}>
            <Link to={`${match.url}/income`} onClick={() => onClick('incomes')}>
              <svg width="10" height="15">
                <use xlinkHref={`${sprite}#icon-arrow-right`} />
              </svg>
            </Link>
          </li>
            </ul>
            <Switch>
          <Route exact  path={`${match.path}`} render={props => <Expenses setCategory={data} setType={setType} {...props} />} />
          <Route
            exact
            path={`${match.path}/income`}
            render={props => <Income setCategory={data} setType={setType}{...props} />}
                />

        </Switch>
         </div>
    )
}

export default ToggleStatistics;