import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.book}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.cont}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
