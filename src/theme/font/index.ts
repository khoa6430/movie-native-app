import { Font } from "react-native-paper/lib/typescript/types";

const fontConfig = {
  bodySmall: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400" as Font["fontWeight"],
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "400" as Font["fontWeight"],
    letterSpacing: 0.25,
    lineHeight: 30,
  },
  bodyLarge: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "400" as Font["fontWeight"],
    letterSpacing: 0.15,
    lineHeight: 36,
  },
};

export default fontConfig;
