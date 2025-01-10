import { Flex, Box, Text, Heading, Grid } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <Flex direction="column" alignItems={"center"} mt={6} p={4} maxWidth={"2000px"} mx={"auto"}>
      <Heading as="h2" size="lg" mb={4}>Work Experience</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>

      <Box
        bg="gray.100"
        borderRadius="md"
        p={5}
        mb={4}
        w="100%"
        boxShadow="lg"
        
      >
        <Flex align="center">
          <FaBriefcase size="24px" color="teal" />
          <Text fontWeight="bold" color={"teal"} fontSize="xl" ml={3}>Full Stack Developer | United Business Solution</Text>
        </Flex>
        <Text mt={2} color={"gray.500"}>Dec 2023 – Present | Monmouth Junction, NJ</Text>
        <Text mt={3} color={"blackAlpha.800"}>• Designed and developed utility classes and user interfaces using CSS, HTML, and JavaScript to enhance user experience.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Optimized REST API performance with data serialization and caching strategies, reducing response times by 25%.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Refactored code and implemented design patterns, improving maintainability and efficiency by 30%.</Text>
      </Box>
      <Box
        bg="gray.100"
        borderRadius="md"
        p={5}
        mb={4}
        w="100%"
        boxShadow="lg"
        
        >
        <Flex align="center">
          <FaBriefcase size="24px" color="teal" />
          <Text fontWeight="bold" color={"teal"} fontSize="xl" ml={3}> Graduate Teaching Assistant | University of Texas at San Antonio</Text>
        </Flex>
          
        <Text mt={2} color={"gray.500"}>Dec 2023 – Present | Monmouth Junction, NJ</Text>
        <Text mt={3} color={"blackAlpha.800"}>• Designed and developed utility classes and user interfaces using CSS, HTML, and JavaScript to enhance user experience.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Optimized REST API performance with data serialization and caching strategies, reducing response times by 25%.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Refactored code and implemented design patterns, improving maintainability and efficiency by 30%.</Text>
      </Box>
      <Box
        bg="gray.100"
        borderRadius="md"
        p={5}
        mb={4}
        w="100%"
        boxShadow="lg"
        
        >
        <Flex align="center">
          <FaBriefcase size="24px" color="teal" />
          <Text fontWeight="bold" color={"teal"} fontSize="xl" ml={3}>Student Assistant | John Peace Library, UTSA</Text>
        </Flex>
        <Text mt={2} color={"gray.500"}>Dec 2023 – Present | Monmouth Junction, NJ</Text>
        <Text mt={3} color={"blackAlpha.800"}>• Designed and developed utility classes and user interfaces using CSS, HTML, and JavaScript to enhance user experience.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Optimized REST API performance with data serialization and caching strategies, reducing response times by 25%.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Refactored code and implemented design patterns, improving maintainability and efficiency by 30%.</Text>
      </Box>
      <Box
        bg="gray.100"
        borderRadius="md"
        p={5}
        mb={4}
        w="100%"
        boxShadow="lg"
        
        >
        <Flex align="center">
          <FaBriefcase size="24px" color="teal" />
          <Text fontWeight="bold" color={"teal"} fontSize="xl" ml={3}>Junior Java Developer | Mojoes Technologies</Text>
        </Flex>
        <Text mt={2} color={"gray.500"}>Dec 2023 – Present | Monmouth Junction, NJ</Text>
        <Text mt={3} color={"blackAlpha.800"}>• Designed and developed utility classes and user interfaces using CSS, HTML, and JavaScript to enhance user experience.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Optimized REST API performance with data serialization and caching strategies, reducing response times by 25%.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Refactored code and implemented design patterns, improving maintainability and efficiency by 30%.</Text>
      </Box>
      <Box
        bg="gray.100"
        borderRadius="md"
        p={5}
        mb={4}
        w="100%"
        boxShadow="lg"
        
        >
        <Flex align="center">
          <FaBriefcase size="24px" color="teal" />
          <Text fontWeight="bold" color={"teal"} fontSize="xl" ml={3}>Software Engineer Intern | TechBona Infomatics Pvt. Ltd.</Text>
        </Flex>
        <Text mt={2} color={"gray.500"}>Dec 2023 – Present | Monmouth Junction, NJ</Text>
        <Text mt={3} color={"blackAlpha.800"}>• Designed and developed utility classes and user interfaces using CSS, HTML, and JavaScript to enhance user experience.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Optimized REST API performance with data serialization and caching strategies, reducing response times by 25%.</Text>
        <Text mt={1} color={"blackAlpha.800"}>• Refactored code and implemented design patterns, improving maintainability and efficiency by 30%.</Text>
      </Box>

          </Grid>
    </Flex>
  );
}

export default WorkExperience;
