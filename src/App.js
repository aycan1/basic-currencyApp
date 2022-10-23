import React from "react";
import MainPage from "./MainPage";
import MainContextProvider from "./store/main-context";

function App() {
  return (
    <MainContextProvider>
      <MainPage />
    </MainContextProvider>
  );
}

export default App;
