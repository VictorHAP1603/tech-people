import React from "react";
// import { makeServer } from "./services/mirage";

// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home";


// eslint-disable-next-line
import "swiper/css/bundle";

// if (process.env.NODE_ENV === "development") makeServer();

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
