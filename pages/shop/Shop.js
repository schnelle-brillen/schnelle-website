import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocalStorage } from "../../hooks";
import { GET_GLASSES } from "../../services/queries";
import { GlassCard, SocialMediaSideBar, Icon } from "../../components";
import { config } from "../../config";
import withData from "../../apollo/withData";
import "./Shop.css";

const { CONTENT_URL } = config();

const Shop = ({ basket, addItemToBasket }) => {
  const { data: glassData } = useQuery(GET_GLASSES);
  return (
    <div>
      <div className="sb-de-glasses-container">
        {glassData &&
          glassData.glasses.map(glass => (
            <GlassCard
              onClick={() => {
                addItemToBasket(glass);
                document.location.href = "/checkout";
              }}
              {...glass}
              img={`${CONTENT_URL}${glass.image.url}`}
              key={glass.id}
            />
          ))}
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

export default withData(Shop);
