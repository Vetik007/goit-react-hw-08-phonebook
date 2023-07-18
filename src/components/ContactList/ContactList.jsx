import { useDispatch, useSelector } from 'react-redux'; // для доступу до стору
import { useEffect } from 'react';
// import { GiRotaryPhone } from 'react-icons/gi';
// import { GrContactInfo } from 'react-icons/gr';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/contactOperations'; // операції
import Loader from '../Loader/Loader';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); // витягуємо зі стору
  const isLoading = useSelector(selectIsLoading); // витягуємо зі стору
  const error = useSelector(selectError); // витягуємо зі стору
  const dispatch = useDispatch(); // для діспатча екшенів

  useEffect(() => {
    dispatch(fetchContacts()); // діспатчимо екшен
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // діспатчимо екшен
  };

  return (
    <>
      {isLoading && <Loader />}

      {/* якщо немає контактів і не йде загрузка і не виникла помилка */}
      {!filteredContacts?.length && !error && !isLoading && (
        <p className={css.text}>No contacts found.</p>
      )}

      {/* якщо виникла помилка */}
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {/* Перебираємо масив контактів і рендеримо їх */}
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {/* <GrContactInfo size={20} /> */}
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              className={`${css.custom} ${css.btn9}`}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
