import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onSubmit(newContact);

    setName('');
    setNumber('');
  };

  const handelChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <form autoComplete="off" onSubmit={handelSubmit} action="">
      <label htmlFor={nameInputId}>
        Name
        <br />
        <Input
          id={nameInputId}
          onChange={handelChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label htmlFor={numberInputId}>
        Number
        <br />
        <Input
          id={numberInputId}
          onChange={handelChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}
