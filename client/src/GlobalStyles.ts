import { createGlobalStyle } from "styled-components";

export const colors = {
  darkGraphite: "#303641",
  white: "#FFFFFF",
  whisperingFrost: "#EFEEF1",
  coralPink: "#FF6B6B",
  darkGray: "#313131",
  lightGray: "#7E8AA2",
  gray: "#707070",
  paleBlue: "#AEDFF7",
  orange: "#f7be99",
  yellow: '#FFD166',
  seafoamGreen: "#70F4C1",
  lightRed: "#E98888",
  whitishRed: "#F9D1D2",
  blue: "#4661E6",
  deepGreen: "#11CC11",
  purple: '#834CFF',
  brightPurple: '#996FF4',
  lightPurple: '#CDC1FF',
  lavender: '#C78DDE',
};

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 62.5%;
    scroll-behavior: smooth;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1.4rem;
      scrollbar-width: thin;
      scrollbar-color: #996ff4 white;
  }
  body {
    min-width: 320px;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 1.5rem;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  form {
    margin: 2rem 0;
  }
  form > * {
    margin: 1rem 0;
  } 
  fieldset {
    padding: 1rem;
    border-radius: 1rem;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }

  }
`;

export default GlobalStyles;