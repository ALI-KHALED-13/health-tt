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

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export default GlobalStyles;