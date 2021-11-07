import RoutedApp from './RoutedApp'
import store from "./store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RoutedApp/>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
