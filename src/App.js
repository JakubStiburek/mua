import RoutedApp from './RoutedApp'
import store from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RoutedApp/>
    </Provider>
  );
}

export default App;
