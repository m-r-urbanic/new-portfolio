import { useState } from 'react';
import './style.css';

function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Email':
        setEmail(value);
        break;
      case 'Message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();
    alert(`You have submitted the following information: ${Name} ${Email} ${Message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>
        Contact Me:
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input className="message"
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
