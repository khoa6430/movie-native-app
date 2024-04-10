import { extendTheme } from "native-base";
import colors from "./palette";
import fontConfig from "./font";

export const customTheme = extendTheme({
  colors: {
    ...colors,
  },
  fontConfig: {
    ...fontConfig,
  },
  fonts: {
    heading: "Roboto", // Use Roboto font for headings
    body: "Roboto", // Use Roboto font for body text
    mono: "Roboto", // Use Roboto font for monospaced text
  },
});
