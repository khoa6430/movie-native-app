import {
  MD3LightTheme as DefaultTheme,
  configureFonts,
  useTheme,
} from "react-native-paper";
import { Font } from "react-native-paper/lib/typescript/types";
import colors from "./palette";
import { Platform } from "react-native";
import fontConfig from "./font";

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: configureFonts({ config: fontConfig }),
};

export type AppTheme = typeof customTheme;

export const useAppTheme = () => useTheme<AppTheme>();
