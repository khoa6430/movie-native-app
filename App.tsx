import React, { StrictMode, type PropsWithChildren } from "react";
import { customTheme } from "./src/theme/userTheme";
import AppNavigation from "./src/navigation/appNavigation";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <PaperProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>
          <AppNavigation />
        </QueryClientProvider>
      </PaperProvider>
    </StrictMode>
  );
};

export default App;
