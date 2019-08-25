import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { GET_QUOTES } from "../../services/queries";
import { Button, SocialMediaSideBar, Icon, Quote } from "../../components";
import { config } from "../../config";

import "./Home.css";

const { CONTENT_URL } = config();

const Home = ({ addItemToBasket, history }) => {
  return (
    <div>
      <div className="sb-de-home-header">
        <div className="sb-de-home-header-overlay">
          <h1>SCHNELLE BRILLEN</h1>
          <h2>BESCHLEUNIGEN - SCHNELLE BRILLEN TRAGEN</h2>
          <Button
            className="sb-de-home-header-overlay-button"
            onClick={() => history.push("/shop")}
          >
            SCHNELLE MODELLE
          </Button>
        </div>
        <video
          className="sb-de-home-header-video"
          loop
          crossorigin="anonymus"
          role="presentation"
          preload="auto"
          autoPlay
          muted
          width=""
          height=""
        >
          <source
            type="video/webm"
            src="/media/schnelle-brillen-background.webm"
          />
          <source
            type="video/mp4"
            src="/media/schnelle-brillen-background.mp4"
          />
        </video>
      </div>
      <div className="sb-de-home-section-quote">
        <Query query={GET_QUOTES}>
          {({ loading, error, data }) => {
            if (loading || error) {
              return null;
            }
            return data.quotes.map(({ img, text }) => (
              <Quote
                className="sb-de-home-quote"
                img={{ src: `${CONTENT_URL}${img.url}` }}
                quote={text}
              />
            ));
          }}
        </Query>
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

export default withRouter(Home);
