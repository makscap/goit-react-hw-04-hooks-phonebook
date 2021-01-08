import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';


  export default function Form({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name: name, number: number});
    reset();
  };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Example: XXX-XX-XX"
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};