import React from "react";
import { TextInput, Card } from "..";

import "./AddressForm.css";

export default ({ data, setFormUpdate }) => {
  const handleInputUpdate = name => value =>
    setFormUpdate({ ...data, [name]: value });
  return (
    <Card className="sb-de-address-form">
      <h2>Lieferadresse</h2>
      <TextInput
        label="Vorname"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("firstname")}
      />
      <TextInput
        label="Nachname"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("lastname")}
      />
      <TextInput
        label="Email"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("email")}
      />
      <TextInput
        label="Straße"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("address")}
      />
      <TextInput
        label="Hausnummer"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("housenr")}
      />
      <TextInput
        label="PLZ"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("zip")}
      />
      <TextInput
        label="Ort"
        placeholderLabel=""
        input={data.firstname}
        handleInputUpdate={handleInputUpdate("city")}
      />
    </Card>
  );
};
