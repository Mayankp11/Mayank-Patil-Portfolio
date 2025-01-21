
import { Box, Flex, Heading, HStack, Link, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="header"
      bg="teal.600"
      color="white"
      px={8}
      py={4}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex alignItems="center">
        {/* Logo Section */}
        <Heading as="h1" size="md" fontFamily="serif">
          <Link href="/" _hover={{ textDecoration: "none", color: "teal.300" }}>
            <Text>My Logo</Text>
          </Link>
        </Heading>

        {/* Spacer pushes navigation to the right */}
        <Spacer />

        {/* Navigation Links */}
        <HStack spacing={8} fontSize="md" fontWeight="semibold">
          <Link href="#home" _hover={{ textDecoration: "underline", color: "teal.300" }}>
            Home
          </Link>
          <Link href="#about" _hover={{ textDecoration: "underline", color: "teal.300" }}>
            About
          </Link>
          <Link href="#experience" _hover={{ textDecoration: "underline", color: "teal.300" }}>
            Experience
          </Link>
          <Link href="#projects" _hover={{ textDecoration: "underline", color: "teal.300" }}>
            Projects
          </Link>
          <Link href="#techstack" _hover={{ textDecoration: "underline", color: "teal.300" }}>
            TechStack
          </Link>
          <Link href="#contact" _hover={{ textDecoration: "underline", color: "teal.300" }}>
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
