import React from "react";
import { GET_QUOTES } from "../../services/queries";
import { Button, SocialMediaSideBar, Icon, Quote } from "../../components";
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
          <h1>SCHNELLE BRILLEN</h1>
          <h2>BESCHLEUNIGEN - SCHNELLE BRILLEN TRAGEN</h2>
          <Button
            className="sb-de-home-header-overlay-button"
            onClick={() => {
              document.location.href = "/shop";
            }}
          >
            SCHNELLE MODELLE
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
      <SocialMediaSideBar
        elements={[
          {
            icon: <Icon.Instagram />,
            link: "https://www.instagram.com/schnelle_brillen/"
          }
        ]}
      />
    </div>
  );
};

export default withData(Home);
