import RoutedApp from './RoutedApp'
import store from "./store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const queryClient = new QueryClient();
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFF4F5",
      }
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <RoutedApp/>
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
