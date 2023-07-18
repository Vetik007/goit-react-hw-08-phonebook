import { useDispatch, useSelector } from 'react-redux'; // отримуємо доступ до стору
import { nanoid } from 'nanoid'; // генерує унікальні id
import { ToastContainer, toast } from 'react-toastify'; // пакет для повідомлень

import { addContact } from 'redux/contactOperations';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch(); // функція, яка дозволяє відправити екшн
  const contacts = useSelector(selectContacts); // отримуємо доступ до стору

  const handleSubmit = event => {
    event.preventDefault(); // відміняємо стандартну поведінку браузера

    const newContact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // перевіряємо чи такий контакт вже є в списку
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase() // переводимо в нижній регістр і порівнюємо
    );

    // Якщо контакт вже існує, то виводимо повідомлення
    if (isExist) {
      return toast.warn(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContact(newContact)); // відправляємо екшн з контактом в стейт
    event.currentTarget.reset(); // очищаємо форму
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nanoid()}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label} htmlFor={nanoid()}>
          Number Phone
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="^\\+?\\d{1,4}[-.\\s]?\\(\\d{1,3}\\)[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={nanoid()}
            required
          />
        </label>

        <button className={`${css.custom} ${css.btn12}`} type="submit">
          <span>Click!</span>
          <span>Add contact</span>
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
