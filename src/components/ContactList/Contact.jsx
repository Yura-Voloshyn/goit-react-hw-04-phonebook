import styled from '@emotion/styled';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </ListItem>
  );
};

export default ContactItem;
const ListItem = styled.li`
  /* width: 300px; */
  display: flex;
  margin: 8px 0;
  gap: 10px;
  & p {
    margin: 0;
  }
  & button {
    margin-left: auto;
    padding: 2px 4px;
  }
`;
