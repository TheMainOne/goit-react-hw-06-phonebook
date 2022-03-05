import React from "react";
import PropTypes from "prop-types";
import { List, Button, ListItem, Notification } from "./Contacts.styled";

const Contacts = ({ contacts, filteredContacts, deleteContact }) => {

  return (
    <div>
      {contacts.length === 0 ? (
        <Notification>No contacts added yet</Notification>
      ) : (
        <List>
          {filteredContacts.length === 0 ? (
            <p>Contact not found</p>
          ) : (
            filteredContacts.map((contact) => (
              <ListItem key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <Button onClick={() => deleteContact(contact.id)}>
                  delete
                </Button>
              </ListItem>
            ))
          )}
        </List>
      )}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
