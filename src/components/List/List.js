import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
import { useParams, Navigate } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';


const List = () => {
  const { listId } = useParams();


  const columns = useSelector((state) => getColumnsByList(state, listId));

  const listData = useSelector((state) => getListById(state, listId));
  if(!listData) return <Navigate to="/" />


  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span className={styles.span}>soon</span></h2>
      </header>
      <p className={styles.description}>“Interesting things I want to check out”</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />)}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List