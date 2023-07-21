import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Contacts/operations';
// import { useState } from 'react';
import {
  FormWrap,
  AddBtn,
  UserIcon,
  PhoneIcon,
  InputForm,
  Wrapper,
} from './ContactForm.styled'; // стилі
// import { PlusCircleOutlined } from '@ant-design/icons'; // іконки

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
    <Wrapper>
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
          <AddBtn type="primary" htmlType="submit">
            Add contact
          </AddBtn>
        </FormWrap.Item>
      </FormWrap>
    </Wrapper>
  );
};
