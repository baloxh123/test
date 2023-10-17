import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import customTheme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
