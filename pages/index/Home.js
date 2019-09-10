import React from "react";
import { GET_QUOTES } from "../../services/queries";
import {
  Button,
  SocialMediaSideBar,
  Icon,
  Quote,
  MusicPlayer
} from "../../components";
import { useQuery } from "@apollo/react-hooks";
import { config } from "../../config";
import withData from "../../apollo/withData";
import "./Home.css";

const { CONTENT_URL } = config();

const Home = () => {
  const { data: quotesData } = useQuery(GET_QUOTES, {});

  return (
    <div>
      <div className="sb-de-home-header">
        <div className="sb-de-home-header-overlay">
          <h1 className="sb-de-special-header">SCHNELLE BRILLEN.DE</h1>
          <p>
            Auf Schnelle Brillen DE bekommst du die Brillen mit der richtigen
            Geschwindigkeit. <br />
            Ob Festival, Club oder Sport wir haben die enganliegenden Modelle.{" "}
            <br /> In unserem einfachen Shop bekommst du mit wenig Klicks den
            Style der dich so richtig beschleunigt. <br />
            <br />
            Wie das funktioniert erklären wir weiter untern - oder folge doch
            direkt dem Button zu unserem Shop.
          </p>
          <Button
            className="sb-de-home-header-overlay-button"
            onClick={() => {
              document.location.href = "/shop";
            }}
          >
            DIE SCHNELLEN MODELLE
          </Button>
        </div>
        <video
          className="sb-de-home-header-video"
          loop
          crossOrigin="anonymus"
          role="presentation"
          preload="auto"
          autoPlay
          muted
          width=""
          height=""
        >
          <source
            type="video/webm"
            src="/static/media/schnelle-brillen-background.webm"
          />
          <source
            type="video/mp4"
            src="/static/media/schnelle-brillen-background.mp4"
          />
        </video>
      </div>
      <div className="sb-de-home-section-quote">
        {quotesData &&
          quotesData.quotes.map(({ id, img, text }) => {
            return (
              <Quote
                className="sb-de-home-quote"
                img={{ src: `${CONTENT_URL}${img.url}` }}
                quote={text}
                key={id}
              />
            );
          })}
      </div>
      <div className="sb-de-home-advantages">
        <div className="sb-de-home-advantage">
          <div className="sb-de-home-advantage-icon-wrapper">
            <Icon.ShoppingCardAdd />
          </div>
          <h2>Shoppen</h2>
          <p>
            Wähle die Brillen aus die zu dir passen und dir die richtige
            Geschwindigkeit geben.
          </p>
        </div>
        <div className="sb-de-home-advantage">
          <div className="sb-de-home-advantage-icon-wrapper">
            <Icon.Payment />
          </div>
          <h2>Bezahlen</h2>
          <p>Sicher und schnell mit Paypal, EC- oder Kreditkarte bezahlen.</p>
        </div>
        <div className="sb-de-home-advantage">
          <div className="sb-de-home-advantage-icon-wrapper">
            <Icon.ManOnBike />
          </div>
          <h2>Liefern</h2>
          <p>
            Mit hochgeschwindigkeit Arbeiten wir ab diesem Punkt an deiner
            Belieferung.
          </p>
        </div>
      </div>
      <SocialMediaSideBar
        elements={[
          {
            icon: <Icon.Instagram />,
            link: "https://www.instagram.com/schnelle_brillen/"
          }
        ]}
      />
      <MusicPlayer />
    </div>
  );
};

export default withData(Home);
