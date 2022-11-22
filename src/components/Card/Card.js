import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleCardFavorite(id))
    }
    return (
        <li className={styles.card}>
            {title}
            <div>
                <button onClick={toggle}
                    className={clsx(
                        styles.star_button && styles.active)}>
                    <span className='fa fa-star-o' />
                </button>
            </div>
        </li>
    );
};

export default Card