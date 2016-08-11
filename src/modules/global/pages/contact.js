// Dependencies.
import React from 'react';
import { Input } from 'react-bootstrap';

// Layout components.
import Main from '../../../layouts/main';

// Utilities.
import utils from '../../../utils';


// Define class.
class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      email: '',
    };
  }

  handleInputChange(key, e) {
    const val = e.target.value;
    console.log('input val: ', val);
    console.log('key: ', key);
    this.setState({ [key]: val });
  }

  // Render method.
  render() {
    const { firstName, email } = this.state;

    return (
      <Main>
        <h1>Contact</h1>

        <p>Name: {firstName}</p>
        <p>Email: {email}</p>

        <form>

          <div className="form-group">
            <label htmlFor="firstName" className="control-label">Name:</label>
            {' '}
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              onChange={this.handleInputChange.bind(this, 'firstName')}
           />
          </div>

          <Input type="email" label="Email:" onChange={this.handleInputChange.bind(this, 'email')} />

          <hr/>
          <button type="button">Submit</button>
        </form>
      </Main>
    );
  }
}

// Export.
export default ContactPage;
