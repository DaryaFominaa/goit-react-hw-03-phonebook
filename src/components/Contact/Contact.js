import { ContactEl, ButtonEl } from './Contact.styled';

export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <ContactEl>
        Name: {name} - Phone: {number}
        <ButtonEl type="button" onClick={() => onDelete(id)}>
          Delete
        </ButtonEl>
      </ContactEl>
    </div>
  );
};
