// import original module declarations
import 'styled-components';

// and extend them
declare module 'styled-components' {
  export interface DefaultTheme {
    darkGraphite: string,
    white: string,
    whisperingFrost: string,
    coralPink: string,
    darkGray: string,
    lightGray: string,
    gray: string,
    paleBlue: string,
    orange: string,
    yellow: string,
    seafoamGreen: string,
    lightRed: string,
    whitishRed: string,
    blue: string,
    deepGreen: string,
    purple: string,
    brightPurple:string,
    lightPurple: string,
    lavender: string,
  }
}
