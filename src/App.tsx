import React from "react";
import { makeServer } from "./services/mirage";


// Components
import { Header } from "./components/Header";

// Pages
import { Home } from "./pages/Home";

if (process.env.NODE_ENV === 'development') makeServer()

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
