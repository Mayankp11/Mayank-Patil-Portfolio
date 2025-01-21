import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import About from "./components/About";
import ColorModeSwitch from "./components/ColorModeSwitch";

import IntroSection from "./components/IntroSection";
import Experience2 from "./components/Experience2";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Flex
      direction="column" // Stack children vertically
      height="100vh" // Full height
      width="100vw" // Full width
      // justifyContent="center" // Center horizontally
      // alignItems="center" // Center vertically
      p={2} // Add padding for spacing
      gap={4} // Add spacing between children
      overflow="auto" // Enable scrolling when content overflows
    >
      <ColorModeSwitch />
      <Box m={0} p={0} w="100%">
      <Navbar />
      <IntroSection />
    </Box>

      <Box width="100%">
        <About />
      </Box>

      <Box mt={8} width="100%">
        <Experience2 />
      </Box>
      <Box width="100%">
        <Projects />
      </Box>

      <Box>
        <TechStack />
      </Box>
    </Flex>
  );
};

export default App;
