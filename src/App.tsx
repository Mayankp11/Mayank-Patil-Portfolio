import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import About from "./components/About";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Projects from "./components/Projects";
import Experience2 from "./components/Experience2";
import Certifications from "./components/Certifications";

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
      {/* <Box width="100%">
        <About />
      </Box>

      <Box mt={8} width="100%"> */}
        {/* <WorkExperience /> */}
        {/* <Experience2 />
      </Box>
      <Box width="100%">
        <Projects />
      </Box> */}
      <Box>
        <Certifications />
      </Box>
    </Flex>
  );
};

export default App;
