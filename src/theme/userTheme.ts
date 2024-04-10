import colors from "./palette";
import fontConfig from "./font";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  useTheme,
} from "react-native-paper";

// // Extend the Theme interface to include your custom colors
// declare module "react-native-paper/lib/typescript/types" {
//   export interface ThemeColors {
//     honeyGold: string;
//   }
// }

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

export type AppTheme = typeof customTheme;

export const useAppTheme = () => useTheme<AppTheme>();
