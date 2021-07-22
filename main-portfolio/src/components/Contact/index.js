import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { validateEmail } from "../utils/helpers";

export default function Contact() {

  const initialState = { name: "", email: "", message: "" };
  const [entry, setFormState] = useState(initialState);
  const { name, email, message } = entry;
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (e) => {
    setFormState({ ...entry, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Provided email is not valid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...entry, [e.target.name]: e.target.value });
    }
  };

  function handleSubmit(e) {
    const isValid = validateEmail(email);
    const refresh = () => {
      alert(`${message} Sent!`);
      window.location = "/";
    };
    e.preventDefault();
    errorMessage
      ? alert(errorMessage)
      : !name && email && message
        ? alert("Name is required")

        : !email && name && message
          ? alert("Email is required")

          : !message && email && name
            ? alert("Message is required")

            : !message && !email && !name
              ? alert("Fields can not be blank!")

              : !isValid
                ? alert("Your email is invalid")
                : refresh();
  }

  return (
    <section className='col-12 d-flex flex-wrap justify-content-center mt-5'>

      <Form className='col-11 col-sm-11 col-md-6 col-lg-5 col-xl-4 bg-dark contactForm p-5 boxShadow'>
        <h1 className='text-white textShadow'>Let's get in touch!</h1>

        <Form.Group controlId="nameControl">
          <Form.Label><i className="bi bi-person-square" style={{ fontSize: '1.5rem', color: 'lightGreen' }}></i> <span className='text-white'>Name:</span> </Form.Label>
          <Form.Control
            className='formLabel'
            type="text"
            placeholder="John Smith"
            onBlur={handleOnChange}
            defaultValue={name}
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="emailControl">
          <Form.Label> <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem', color: 'lightGreen' }}></i>  <span className='text-white'>Email:</span> </Form.Label>
          <Form.Control
            className='formLabel'
            type="email"
            name="email"
            placeholder="example@example.com"
            onBlur={handleOnChange}
            defaultValue={email}
          />
        </Form.Group>
        <Form.Group controlId="messageControl">
          <Form.Label> <i className="bi bi-pencil-square" style={{ fontSize: '1.5rem', color: 'lightGreen' }}></i> <span className='text-white'>Feel free to leave a message</span>  </Form.Label>
          <Form.Control
            className='formLabel'
            defaultValue={message}
            onBlur={handleOnChange}
            placeholder="Required"
            name="message"
            as="textarea"
            rows={5}

          />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}
        <div className='col-12 d-flex flex-wrap justify-content-end m-1 p-2'>
          <button type='submit'
            className='blue p-3 m-1 text-white textShadow boxShadow submit'
            onSubmit={(e) => handleSubmit(e)}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </Form>
    </section>
  );
}
