import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";
import { config } from "../config";

const { GRAPHQL_URL } = config();

const apolloConfig = {
  link: new HttpLink({
    uri: GRAPHQL_URL // Server URL (must be absolute)
  })
};

export default withData(apolloConfig);
