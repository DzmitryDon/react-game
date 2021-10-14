import { Provider } from "react-redux";
import { store } from "./store/store";
import RouterComponent from "./router/Router";
import "./scss/styles.scss";

const App = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
};

export default App;
