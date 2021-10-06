import { Link } from 'react-router-dom';
import s from './GoBackButton.module.scss';
import { ReactComponent as Icon} from '../../images/icons/arrow-backspace.svg'

const GoBackButton = () => {

    return (
        <div className={s.GoBackButton}>
            <Link to='/transactions' className={s.link} >
                <Icon/>
            </Link>
        </div>
    );
};

export default GoBackButton;
