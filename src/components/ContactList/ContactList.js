import { Section } from 'components/Section/Section.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Section>
      <p>Contact list</p>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <li key={id}>
                <p>
                  {name} : <span>{number}</span>
                </p>
                <button type="button" onClick={() => onDelete(id)}>
                  Remove contact
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Your contacts list is empty</p>
      )}
    </Section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
