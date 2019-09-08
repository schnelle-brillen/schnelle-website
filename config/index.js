const options = {
  development: {
    PAYPAL_CLIENT_ID: "sb",
    CONTENT_URL: "https://api.schnelle-brillen.de/",
    GRAPHQL_URL: "https://api.schnelle-brillen.de/graphql"
  },
  production: {
    PAYPAL_CLIENT_ID: "sb",
    CONTENT_URL: "https://api.schnelle-brillen.de/",
    GRAPHQL_URL: "https://api.schnelle-brillen.de/graphql"
  }
};

export default options;

export function config() {
  return options[process.env.NODE_ENV];
}
