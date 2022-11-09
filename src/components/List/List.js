import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useState } from 'react';
import shortid from 'shortid';

const List = () => {

  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' }
  ]);


  const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon }]);
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Thinks to do<span className={styles.span}>soon</span></h2>
      </header>
      <p className={styles.description}>“Interesting things I want to check out”</p>
      <section className={styles.columns}>
        {/*PĘTLA... przejdź po tablicy z obiektami kolumn i zwróć nową, gdzie każdy obiekt będzie zastąpiony elementem <Column> z odpowiednimi parametrami. 
        -column to jeden obiekt wybrany z tablicy 
        -key ma być unikalnym identyfikatorem dla reacta- zawsze należy go nadawać kiedy mapujemy po tablicy!!! */}
        {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
      </section>
      {/*onSubmit - dodanie do elemetu(submit) nasłuchiwacza w klamerkach jest nazwa funkcji callback przy wykryciu eventu*/}

      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List