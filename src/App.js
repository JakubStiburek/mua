import RoutedApp from './RoutedApp'
import store from "./store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import {ChakraProvider} from "@chakra-ui/react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Provider store={store}>
          <RoutedApp/>
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
