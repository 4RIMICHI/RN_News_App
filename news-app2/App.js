import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};
