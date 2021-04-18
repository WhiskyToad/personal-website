/* eslint-disable import/no-anonymous-default-export */
import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'BebasNeue';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(fonts/BebasNeue-Regular.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Neoneon';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(fonts/Neoneon.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'DigitalOrange';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(fonts/DigitalOrange.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    } `}
  />
);

export default Fonts;