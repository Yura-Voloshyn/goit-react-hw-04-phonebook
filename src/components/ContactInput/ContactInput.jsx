import PropTypes from 'prop-types';
import { Component } from 'react';
import styled from '@emotion/styled';

class ContactInputSection extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Section>
    );
  }
}
ContactInputSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactInputSection;

const Section = styled.section`
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  width: 300px;
  border: 2px solid orange;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  & button {
    max-width: 120px;

    margin-left: auto;
    margin-right: auto;
  }
`;
