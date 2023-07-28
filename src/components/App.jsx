import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const users = useSelector(state => state.contacts.items);

  return (
    <section>
        <h1>Phonebook</h1>
        <ContactForm />

      <div>
        <h2>Contacts</h2>
        {!users.length 
        ? (<p>Your phonebook is empty. Add your first contact</p>) 
        : (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </div>
    </section>
  );
};
