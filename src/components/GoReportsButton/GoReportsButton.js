import { Link } from 'react-router-dom';
import s from './GoReportsButton.module.scss';
import { ReactComponent as Icon} from '../../images/icons/bar_chart.svg'

const GoReportsButton = () => {

    return (
        <div className={s.GoReportsButton}>
            <Link to='/statistics' className={s.link} >
                <p>Перейти к отчетам</p>
                <Icon/>
            </Link>
        </div>
    );
};

export default GoReportsButton;