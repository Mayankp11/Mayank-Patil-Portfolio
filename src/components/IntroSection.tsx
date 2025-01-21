import { Box, Text, Heading, Button, Link, VStack } from "@chakra-ui/react";

const IntroSection = () => {
  return (
    <Box
      bg="#0a192f"
      color="#ccd6f6"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="8"
    >
      <VStack spacing="6" align="start" maxW="800px">
        <Text fontSize="lg" color="#64ffda">
          Hi, my name is
        </Text>
        <Heading as="h1" size="2xl" fontWeight="bold" color="#ccd6f6">
          Mayank.
        </Heading>
        <Heading as="h2" size="xl" color="#8892b0">
          I build things for the web.
        </Heading>
        <Text fontSize="lg" color="#8892b0" maxW="600px">
          I'm a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          creating accessible, human-centered products at [Your Company].
        </Text>
        <Link href="#about" _hover={{ textDecoration: "none" }}>
          <Button
            colorScheme="teal"
            size="lg"
            bg="#64ffda"
            color="#0a192f"
            _hover={{ bg: "#52e0c6" }}
          >
            Check out my Portfolio!
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default IntroSection;
