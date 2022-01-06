import RoutedApp from './RoutedApp'
import store from "./store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {colorTheme} from "./colorTheme";
import React from "react"
import "./css/markdown.css";

const queryClient = new QueryClient();
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFF4F5",
        color: "#FFF4F5",
        fontFamily: "Archivo",
      }
    }
  }
})

export const ColorThemeContext = React.createContext(colorTheme);


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <ColorThemeContext.Provider value={colorTheme}>
            <RoutedApp/>
          </ColorThemeContext.Provider>
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
