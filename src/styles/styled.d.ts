import styles from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      background: string;

      purple: string;

      blue: string;
      orange: string;
      green: string;
      black: string;
      black2: string;
      black3: string;

      gray: string;
      gray2: string;
      gray3: string;
      white: string;

      danger: string;
    };
  }
}
