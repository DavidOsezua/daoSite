import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden ">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
