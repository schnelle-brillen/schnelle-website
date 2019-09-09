import React from "react";
import { TextInput } from "..";

import "./AddressForm.css";

export default ({ data, setFormUpdate }) => {
  const handleInputUpdate = name => value =>
    setFormUpdate({ ...data, [name]: value });
  return (
    <div className="sb-de-address-form">
      <TextInput
        label="Straße"
        placeholderLabel=""
        value={data.address}
        handleInputUpdate={handleInputUpdate("address")}
      />
      <TextInput
        label="Hausnummer"
        placeholderLabel=""
        value={data.housenr}
        handleInputUpdate={handleInputUpdate("housenr")}
      />
      <TextInput
        label="PLZ"
        placeholderLabel=""
        value={data.zip}
        handleInputUpdate={handleInputUpdate("zip")}
      />
      <TextInput
        label="Ort"
        placeholderLabel=""
        value={data.city}
        handleInputUpdate={handleInputUpdate("city")}
      />
    </div>
  );
};
