import styles from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      background: string;

      blue: string;
      orange: string;
      green: string;
      black: string;
      black2: string;
      black3: string;

      gray: string;
      white: string;

      danger: string;
    };
  }
}
