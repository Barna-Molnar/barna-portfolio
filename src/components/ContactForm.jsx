import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form__group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    /* -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out'; */
    -webkit-transition-delay: 9999s;
  }

  /* 
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--deep-dark) inset !important;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: var(--gray-1) !important;
  } */
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <FormStyle action="#">
        <div className="form__group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              valu={name}
              onChange={(e) => setName(e.target.valeu)}
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              email="email"
              valu={email}
              onChange={(e) => setEmail(e.target.valeu)}
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="message">
            Your email
            <textarea
              type="text"
              id="message"
              email="message"
              valu={message}
              onChange={(e) => setMessage(e.target.valeu)}
            />
          </label>
        </div>

        <button type="submit">Send</button>
      </FormStyle>
    </div>
  );
}
