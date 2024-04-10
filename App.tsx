import React, { type PropsWithChildren } from "react";
import { customTheme } from "./src/theme/userTheme";
import AppNavigation from "./src/navigation/appNavigation";
import { PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider theme={customTheme}>
      <AppNavigation />
    </PaperProvider>
  );
};

export default App;
