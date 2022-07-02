import "styled-components";
import lightTheme from "./theme/light";

declare module "styled-components" {
  type ThemeType = typeof lightTheme;
  export interface DefaultTheme extends ThemeType {}
}
