import React from "react";
import { Card, Button } from "../../components";
import { PAGES } from "../../constants";
import "./ThankYouPage.css";

export default ({ setPage }) => (
  <div className="sb-de-thank-you-page">
    <Card>
      <h1>Flotter Einkauf!</h1>
      <p>
        Wir werden mit der Geschwindigkeit unserer Brillen dafür sorgen, dass du
        bald eine schnelle Brille hast!
      </p>
      <p>Dein SB-Team!</p>
    </Card>
    <Button onClick={() => setPage(PAGES.HOME)}>Zur Startseite</Button>
  </div>
);
