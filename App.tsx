/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./screens/Home/Home";

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
