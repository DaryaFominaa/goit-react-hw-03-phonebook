import { Contact } from '../Contact/Contact';
import { ListEl } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <>
      <ListEl>
        {items.map((item, id) => (
          <li key={id}>
            <Contact contact={item} onDelete={onDelete}></Contact>
          </li>
        ))}
      </ListEl>
    </>
  );
};
