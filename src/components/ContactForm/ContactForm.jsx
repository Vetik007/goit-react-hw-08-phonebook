import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Contacts/operations';
import { useState } from 'react';
import {
  FormWrap,
  AddModalBtn,
  UserIcon,
  PhoneIcon,
  InputForm,
} from './ContactForm.styled'; // стилі
import { PlusCircleOutlined } from '@ant-design/icons'; // іконки

export const ContactForm = () => {
  const [form] = FormWrap.useForm();
  const currentContacts = useSelector(state => state.contacts.items);
  const loader = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const submit = value => {
    // форматуємо номер телефону
    const formatTel = () => {
      const number = value.number;
      const phoneLength = number.length;

      if (phoneLength < 7) {
        return `(${number.slice(0, 3)}) ${number.slice(3)}`;
      }

      return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
        6,
        10
      )}`;
    };

    const newContact = { name: value.name, number: formatTel() };
    const newContactName = newContact.name.toLowerCase();

    if (
      currentContacts.find(
        contact => contact.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      dispatch(addContact(newContact));

      if (!loader) {
        form.resetFields();
      }
    }
  };

  return (
    <FormWrap
      form={form}
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={submit}
    >
      <FormWrap.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input Name!',
            type: 'text',
          },
        ]}
      >
        <InputForm
          prefix={<UserIcon />}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </FormWrap.Item>

      <FormWrap.Item
        name="number"
        rules={[
          {
            required: true,
            message: 'Please input Number!',
            type: 'phone',
          },
        ]}
      >
        <InputForm
          prefix={<PhoneIcon />}
          type=""
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
      </FormWrap.Item>

      <FormWrap.Item>
        <AddModalBtn type="primary" htmlType="submit">
          Create contact
        </AddModalBtn>
      </FormWrap.Item>
    </FormWrap>
  );
};

// *=================================================================
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'Redux/Contacts/operations';
// import { useForm } from 'react-hook-form';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
// import { PlusCircleOutlined } from '@ant-design/icons'; // іконки
// import { PhoneOutlined, UserAddOutlined } from '@ant-design/icons';

// export const ContactForm = () => {
//   const { form } = useForm();
//   const currentContacts = useSelector(state => state.contacts.items);
//   const loader = useSelector(state => state.contacts.isLoading);
//   const dispatch = useDispatch();

//   const submit = value => {
//     // форматуємо номер телефону
//     const formatTel = () => {
//       const number = value.number;
//       const phoneLength = number.length;

//       // перевіряємо чи номер телефону відповідає формату
//       if (phoneLength < 7) {
//         return `(${number.slice(0, 3)}) ${number.slice(3)}`;
//       }

//       // якщо більше 7 то виводимо 3 цифри, потім 3 і потім 4
//       return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
//         6,
//         10
//       )}`;
//     };

//     const newContact = {
//       id: nanoid(),
//       name: value.name,
//       number: formatTel(),
//     };
//     const newContactName = newContact.name.toLowerCase();

//     // перевіряємо чи існує такий контакт
//     if (
//       currentContacts.find(
//         contact => contact.name.toLowerCase() === newContactName
//       )
//     ) {
//       alert(`${newContact.name} is already in contact`);
//     } else {
//       dispatch(addContact(newContact));

//       // якщо контакт додано очищаємо форму
//       if (!loader) {
//         form.reset();
//       }
//     }
//   };

//   return (
//     <>
//       <form className={css.form} onSubmit={submit}>
//         <label className={css.label} htmlFor={nanoid()}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label className={css.label} htmlFor={nanoid()}>
//           Number Phone
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             pattern="^\\+?\\d{1,4}[-.\\s]?\\(\\d{1,3}\\)[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,9}$"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             id={nanoid()}
//             required
//           />
//         </label>

//         <button className={`${css.custom} ${css.btn12}`} type="submit">
//           <span>Click!</span>
//           <span>Add contact</span>
//         </button>
//       </form>
//     </>
//   );
// };

// !====================================================
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'Redux/Contacts/operations';
// import { useState } from 'react';
// import {
//   FormWrap,
//   AddModalBtn,
//   UserIcon,
//   PhoneIcon,
//   InputForm,
//   AddModal,
//   OpenAddModal,
// } from './ContactForm.styled'; // стилі
// import { PlusCircleOutlined } from '@ant-design/icons'; // іконки

// export const ContactForm = () => {
//   const [open, setOpen] = useState(false); // стейт для відкриття модалки
//   const [form] = FormWrap.useForm();
//   const currentContacts = useSelector(state => state.contacts.items); // масив контактів
//   const loader = useSelector(state => state.contacts.isLoading);
//   const dispatch = useDispatch();

//   const showModal = () => {
//     form.resetFields(); // очищаємо форму
//     setOpen(true); // відкриваємо модалку
//   };

//   const submit = value => {
//     // форматуємо номер телефону
//     const formatTel = () => {
//       const number = value.number;
//       const phoneLength = number.length;

//       // перевіряємо чи номер телефону відповідає формату
//       if (phoneLength < 7) {
//         return `(${number.slice(0, 3)}) ${number.slice(3)}`; // якщо менше 7 то виводимо тільки перші 3 цифри
//       }

//       // якщо більше 7 то виводимо 3 цифри, потім 3 і потім 4
//       return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
//         6,
//         10
//       )}`;
//     };

//     const newContact = { name: value.name, number: formatTel() }; // створюємо новий контакт
//     const newContactName = newContact.name.toLowerCase();

//     // перевіряємо чи такий контакт вже є в списку
//     if (
//       currentContacts.find(
//         contact => contact.name.toLowerCase() === newContactName
//       )
//     ) {
//       alert(`${newContact.name} is already in contact`); // якщо є то виводимо повідомлення
//     } else {
//       dispatch(addContact(newContact)); // якщо немає то додаємо контакт

//       // якщо контакт додано то очищаємо форму і закриваємо модалку
//       if (!loader) {
//         form.resetFields();
//         setOpen(false);
//       }
//     }
//   };

//   return (
//     <>
//       <OpenAddModal
//         type="primary"
//         onClick={showModal}
//         title="add new contact"
//         size={'large'} // розмір кнопки
//       >
//         <PlusCircleOutlined />
//         Add contact
//       </OpenAddModal>

//       <AddModal
//         footer={null}
//         title="Add new contact"
//         open={open}
//         onCancel={() => setOpen(false)}
//       >
//         <FormWrap
//           form={form}
//           name="normal_login"
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={submit}
//         >
//           <FormWrap.Item
//             name="name"
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input Name!',
//                 type: 'text',
//               },
//             ]}
//           >
//             <InputForm
//               prefix={<UserIcon />}
//               placeholder="Name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             />
//           </FormWrap.Item>

//           <FormWrap.Item
//             name="number"
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input Number!',
//                 type: 'phone',
//               },
//             ]}
//           >
//             <InputForm
//               prefix={<PhoneIcon />}
//               type=""
//               placeholder="Number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             />
//           </FormWrap.Item>

//           <FormWrap.Item>
//             <AddModalBtn type="primary" htmlType="submit">
//               Create contact
//             </AddModalBtn>
//           </FormWrap.Item>
//         </FormWrap>
//       </AddModal>
//     </>
//   );
// };
// ++++++++++++++++++++++последний++++++++++++++++++++++++++++++++

// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'Redux/Contacts/operations';
// import { useState } from 'react';
// import {
//   FormWrap,
//   AddModalBtn,
//   UserIcon,
//   PhoneIcon,
//   InputForm,
//   FormLabel,
// } from './ContactForm.styled'; // стилі

// // import css from './ContactForm.module.css';
// import { PlusCircleOutlined } from '@ant-design/icons'; // іконки

// export const ContactForm = () => {
//   const { form } = FormWrap.useForm();

//   const currentContacts = useSelector(state => state.contacts.items);
//   const loader = useSelector(state => state.contacts.isLoading);
//   const dispatch = useDispatch();

//   const submit = value => {
//     // форматуємо номер телефону
//     const formatTel = () => {
//       const number = value.number;
//       const phoneLength = number.length;

//       // перевіряємо чи номер телефону відповідає формату
//       if (phoneLength < 7) {
//         return `(${number.slice(0, 3)}) ${number.slice(3)}`;
//       }

//       // якщо більше 7 то виводимо 3 цифри, потім 3 і потім 4
//       return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
//         6,
//         10
//       )}`;
//     };

//     const newContact = { name: value.name, number: formatTel() };
//     const newContactName = newContact.name.toLowerCase();

//     // перевіряємо чи існує такий контакт
//     if (
//       currentContacts.find(
//         contact => contact.name.toLowerCase() === newContactName
//       )
//     ) {
//       alert(`${newContact.name} is already in contact`);
//     } else {
//       dispatch(addContact(newContact));

//       // якщо контакт додано очищаємо форму
//       if (!loader) {
//         form.resetFields();
//       }
//     }
//   };

//   // return (
//   //   <>
//   //     <form className={css.form} onSubmit={handleSubmit}>
//   //       <label className={css.label} htmlFor={nanoid()}>
//   //         Name
//   //         <input
//   //           className={css.input}
//   //           type="text"
//   //           name="name"
//   //           pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
//   //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   //           required
//   //         />
//   //       </label>

//   //       <label className={css.label} htmlFor={nanoid()}>
//   //         Number Phone
//   //         <input
//   //           className={css.input}
//   //           type="tel"
//   //           name="number"
//   //           pattern="^\\+?\\d{1,4}[-.\\s]?\\(\\d{1,3}\\)[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,9}$"
//   //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   //           id={nanoid()}
//   //           required
//   //         />
//   //       </label>

//   //       <button className={`${css.custom} ${css.btn12}`} type="submit">
//   //         <span>Click!</span>
//   //         <span>Add contact</span>
//   //       </button>
//   //     </form>
//   //     <ToastContainer />
//   //   </>
//   // );

//   return (
//     <FormWrap
//       form={form}
//       name="normal_login"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={submit}
//     >
//       <FormLabel
//         name="name"
//         rules={[
//           {
//             required: true,
//             message: 'Please input Name!',
//             type: 'text',
//           },
//         ]}
//       >
//         <InputForm
//           prefix={<UserIcon />}
//           placeholder="Name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         />
//       </FormLabel>

//       <FormLabel
//         name="number"
//         rules={[
//           {
//             required: true,
//             message: 'Please input Number!',
//             type: 'phone',
//           },
//         ]}
//       >
//         <InputForm
//           prefix={<PhoneIcon />}
//           type=""
//           placeholder="Number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         />
//       </FormLabel>

//       <FormWrap.Item>
//         <AddModalBtn type="primary" htmlType="submit">
//           Add contact
//         </AddModalBtn>
//       </FormWrap.Item>
//     </FormWrap>
//   );
// };

// ==============================================

// import { useDispatch, useSelector } from 'react-redux'; // отримуємо доступ до стору
// import { nanoid } from 'nanoid'; // генерує унікальні id
// import { ToastContainer, toast } from 'react-toastify'; // пакет для повідомлень

// import { addContact } from 'redux/contactOperations';
// import { selectContacts } from 'redux/selectors';

// import css from './ContactForm.module.css';

// const ContactForm = () => {
//   const dispatch = useDispatch(); // функція, яка дозволяє відправити екшн
//   const contacts = useSelector(selectContacts); // отримуємо доступ до стору

//   const handleSubmit = event => {
//     event.preventDefault(); // відміняємо стандартну поведінку браузера

//     const newContact = {
//       id: nanoid(),
//       name: event.currentTarget.elements.name.value,
//       number: event.currentTarget.elements.number.value,
//     };

//     // перевіряємо чи такий контакт вже є в списку
//     const isExist = contacts.find(
//       ({ name }) => name.toLowerCase() === newContact.name.toLowerCase() // переводимо в нижній регістр і порівнюємо
//     );

//     // Якщо контакт вже існує, то виводимо повідомлення
//     if (isExist) {
//       return toast.warn(`${newContact.name} is already in contacts.`);
//     }

//     dispatch(addContact(newContact)); // відправляємо екшн з контактом в стейт
//     event.currentTarget.reset(); // очищаємо форму
//   };

//   return (
//     <>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <label className={css.label} htmlFor={nanoid()}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label className={css.label} htmlFor={nanoid()}>
//           Number Phone
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             pattern="^\\+?\\d{1,4}[-.\\s]?\\(\\d{1,3}\\)[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,9}$"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             id={nanoid()}
//             required
//           />
//         </label>

//         <button className={`${css.custom} ${css.btn12}`} type="submit">
//           <span>Click!</span>
//           <span>Add contact</span>
//         </button>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };

// export default ContactForm;

// .........................
