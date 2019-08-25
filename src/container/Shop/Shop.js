import React from "react";
import { Query } from "react-apollo";
import { GET_GLASSES } from "../../services/queries";
import { GlassCard, SocialMediaSideBar, Icon } from "../../components";
import { config } from "../../config";
import "./Shop.css";

const { CONTENT_URL } = config();


const Shop = ({ addItemToBasket }) => (
  <div>
    <div className="sb-de-glasses-container">
      <Query query={GET_GLASSES}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return null;
          }
          return data.glasses.map((glass) => (
            <GlassCard
              onClick={() => addItemToBasket(glass)}
              {...glass}
              img={`${CONTENT_URL}${glass.image.url}`}
              key={glass.id}
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

export default Shop;
