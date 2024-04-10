import React, { StrictMode, type PropsWithChildren } from "react";
import { customTheme } from "./src/theme/userTheme";
import AppNavigation from "./src/navigation/appNavigation";
import { PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <StrictMode>
      <PaperProvider theme={customTheme}>
        <AppNavigation />
      </PaperProvider>
    </StrictMode>
  );
};

export default App;
