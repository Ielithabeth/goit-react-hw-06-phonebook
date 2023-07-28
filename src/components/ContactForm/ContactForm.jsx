import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from "./ContactForm.styled";

export const ContactForm = ({ onSubmit }) => {  
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.target;
    
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

      const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);

        setName('');
        setNumber('');
      };

    return (
            <Form onSubmit={handleSubmit} action="submit" autoComplete="off">
                <label>Name
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="name"
                      value={name}
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                    />
                </label>
        
                <label>Number
                    <input
                      onChange={handleInputChange}
                      type="tel"
                      name="number"
                      value={number}
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                </label>
            
                <button type="submit">Add contact</button>
            </Form>
    )
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    onSubmit: PropTypes.func.isRequired,
}