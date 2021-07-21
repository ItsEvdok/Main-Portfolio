import React from "react";
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
    <section class="text-center">
      <h2 class="m-4"> Contact Me </h2>
    </section>
  );
}
