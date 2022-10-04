import { Provider } from "react-redux";
import { store } from "./store/store";

import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar translucent style="auto" />
      <Navigation />
    </Provider>
  );
}
