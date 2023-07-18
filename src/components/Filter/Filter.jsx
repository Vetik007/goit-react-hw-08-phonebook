import { useDispatch, useSelector } from 'react-redux'; // доступ до store

import { setContactFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';
// import { Input, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch(); // для діспатча екшенів
  const filter = useSelector(selectFilter); // витягуємо зі стору

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default Filter;
