import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle(' ');
        setDescription(' ');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.span}>Title:</span>
            <input
                className={styles.input}
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <span className={styles.span}>Description: </span>{' '}
            <input
                className={styles.input}
                type='text'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <Button>ADD LIST </Button>
        </form>
    );
};

export default ListForm;