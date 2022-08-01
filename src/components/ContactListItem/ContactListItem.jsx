import { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useContacts } from 'hooks';
import { Box } from 'components/Box/Box';

const ContactListItem = ({ id, name, number }) => {
  const [currentId, setCurrentId] = useState(null);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isEdited, setIsEdited] = useState(false);
  const { loader, deleteContact, editContact } = useContacts();

  return (
    <Item>
      {isEdited ? (
        <div>input</div>
      ) : (
        <>
          <span>{name}:</span>
          <span>{number}</span>
        </>
      )}
      <Box>
        <Button
          disabled={currentId}
          onClick={() => {
            setCurrentId(id);
          }}
        >
          {loader && currentId ? 'Edit...' : 'Edit'}
        </Button>
        <Button
          disabled={currentId}
          onClick={() => {
            deleteContact(id);
            setCurrentId(id);
          }}
        >
          {loader && currentId ? 'Deleting...' : 'Delete'}
        </Button>
      </Box>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
