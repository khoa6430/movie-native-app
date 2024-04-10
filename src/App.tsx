import React, { type PropsWithChildren } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { customTheme } from "./theme/userTheme";
import AppNavigation from "./navigation/appNavigation";

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppNavigation />;
    </NativeBaseProvider>
  );
};

export default App;
