import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import About from "./components/About";
import IntroSection from "./components/IntroSection";
import Experience2 from "./components/Experience2";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Flex
      direction="column" // Stack children vertically
      height="100vh" // Full height
      width="100vw" // Full width
      p={2} // Add padding for spacing
      gap={4} // Add spacing between children
      overflow="auto" // Enable scrolling when content overflows
    >
      {/* Navbar Section */}
      <Box m={0} p={0} w="100%" id="home">
        {/* Uncomment to enable the color mode switch */}
        {/* <ColorModeSwitch /> */}
        <Navbar />
        <IntroSection />
      </Box>

      {/* About Section */}
      <Box width="100%" id="about">
        <About />
      </Box>

      {/* Experience Section */}
      <Box mt={8} width="100%" id="experience">
        <Experience2 />
      </Box>

      {/* Projects Section */}
      <Box width="100%" id="projects">
        <Projects />
      </Box>

      {/* Tech Stack Section */}
      <Box id="techstack" width="100%">
        <TechStack />
      </Box>

      {/* Footer Section */}
      <Box id="contact" width="100%">
        <Footer />
      </Box>
    </Flex>
  );
};

export default App;
