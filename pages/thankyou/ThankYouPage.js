import React from "react";
import { Card, Button } from "../../components";
import "./ThankYouPage.css";

const ThankYouPage = ({ history }) => (
  <div className="sb-de-thank-you-page">
    <Card>
      <h1>Flotter Einkauf!</h1>
      <p>
        Wir werden mit der Geschwindigkeit unserer Brillen dafür sorgen, dass
        auch du bald eine schnelle Brille hast!
      </p>
      <p>Dein SB-Team!</p>
    </Card>
    <Button onClick={() => history.push("/")}>Zur Startseite</Button>
  </div>
);

export default ThankYouPage;
