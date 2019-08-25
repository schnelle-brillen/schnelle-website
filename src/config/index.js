const options = {
  development: {
    PAYPAL_CLIENT_ID: "sb",
    CONTENT_URL: "https://api.schnelle-brillen.de/"
  },
  production: {
    PAYPAL_CLIENT_ID: "sb",
    CONTENT_URL: "https://api.schnelle-brillen.de/"
  }
};

export default options;


export function config(){
  return options[process.env.NODE_ENV];
}