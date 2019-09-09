import React from "react";
import { TextInput } from "..";

import "./AddressForm.css";

export default ({ data, setFormUpdate }) => {
  const handleInputUpdate = name => value =>
    setFormUpdate({ ...data, [name]: value });
  return (
    <div className="sb-de-address-form">
      <TextInput
        label="Vorname"
        placeholderLabel=""
        value={data.firstname}
        handleInputUpdate={handleInputUpdate("firstname")}
      />
      <TextInput
        label="Nachname"
        placeholderLabel=""
        value={data.lastname}
        handleInputUpdate={handleInputUpdate("lastname")}
      />
      <TextInput
        label="Email"
        placeholderLabel=""
        value={data.email}
        handleInputUpdate={handleInputUpdate("email")}
      />
    </div>
  );
};
