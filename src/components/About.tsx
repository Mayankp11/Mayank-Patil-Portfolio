import { Flex, Box, Image, Text, Grid, List, ListItem, Heading, ListIcon } from "@chakra-ui/react";
import ProfilePhoto from "../images/ProfilePhoto/MP.LinkedInProfilePicture.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiDotOutlineFill } from "react-icons/pi";

import { AiTwotoneMail } from "react-icons/ai";

const About = () => {
  return (
    <Flex
      direction="row"
      width="100%"
      maxWidth="1200px"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      p={5}
      gap={5}
      flexWrap="wrap"
    >
      {/* Profile Picture */}

      <Flex direction={"column"}>
        <Box
          flex="0 1 auto"
          border="1px solid #ddd"
          borderRadius="12px"
          overflow="hidden"
          p={1}
          m={4}
          boxShadow="lg"
        >
          <Image
            src={ProfilePhoto}
            alt="Mayank Patil's Profile Picture"
            objectFit="cover"
            boxSize={["250px", "300px", "350px"]}
            
          />
        </Box>
        <Box mt={2} border={"4px solid #ddd"}  p={2} bg={"orange.50"}>
        <Heading size="md" fontFamily={"mono"} color={"blackAlpha.900"}>Education :</Heading>
        <Text mt={1} fontSize="sm" color="blackAlpha.900">
          Master of Science in Computer Science</Text><Text fontSize="sm" color={"gray.600"}>The University of Texas at San Antonio</Text>
          
        <Text mt={2} fontSize="sm" color="blackAlpha.900">
          Bachelor of Engineering in Computer Engineering</Text><Text fontSize="sm" color={"gray.600"}>Savitribai Phule Pune University </Text>

        </Box>
      </Flex>

      {/* About Text */}
      <Box
        flex="2"
        ml={4}
        p={6}
        border="1px solid #ddd"
        borderRadius="12px"
        boxShadow="lg"
        bg="#f9f9f9"
      >
        {/* About Me Section */}
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="teal.600"
          textAlign={"center"}
          fontFamily={"serif"}
        >
          About Me
        </Text>
        <Text mt={4} fontSize="sm" lineHeight="1.8" color="gray.600">
          Hi, I'm Mayank Patil, a passionate Full Stack Developer with a
          Master's in Computer Science from The University of Texas at San
          Antonio. I specialize in designing and implementing REST APIs to power
          scalable and efficient web applications. I have expertise in Java, the
          Spring framework, and React, enabling me to build robust backends and
          seamlessly connect them to user-friendly front-end interfaces.
        </Text>

        <Text mt={4} fontSize="sm" lineHeight="1.8" color="gray.600">
          Currently, I'm working as a Full Stack Developer at United Business
          Solutions, specializing in designing and developing scalable web
          applications. My focus is on optimizing performance, building secure
          and reliable APIs, and ensuring seamless integration with third-party
          tools. I work closely with cross-functional teams to implement
          cloud-native solutions using AWS and Google Cloud, while adhering to
          industry best practices to ensure the efficiency and security of our
          systems. My role also involves enhancing user experiences by improving
          application interfaces and streamlining backend operations.
        </Text>

        <Text mt={4} fontSize="sm" lineHeight="1.8" color="gray.600">
          In the past, beyond technical work, I’ve enjoyed mentoring students as
          a Graduate Teaching Assistant, sharing my passion for technology and
          helping them overcome coding challenges. Additionally, my role as a
          Student Assistant at the UTSA library honed my problem-solving and
          organizational skills, improving resource tracking and ensuring secure
          user authentication. These experiences have allowed me to develop
          strong communication and leadership skills while contributing to the
          growth and development of others.
        </Text>

        <Text mt={4} fontSize="sm" lineHeight="1.8" color="gray.600">
          Apart from my professional pursuits, I enjoy playing soccer, hiking,
          reading, photography, and writing blogs. I aspire to build a career
          that intertwines my skills and hobbies, creating a journey that I
          truly enjoy. As a passionate Liverpool FC fan, I live by their mantra:
          "At the end of the storm, there's a golden sky."
        </Text>

        {/* Technical Expertise Section */}
        <Text mt={4} fontSize="sm" lineHeight="1.8" color="gray.600">
          Here are a few of the technologies I'm working with:
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={1} mt={4}>
          <Box>
            <List spacing={0}>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                Java
              </ListItem>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                Spring Framework
              </ListItem>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                REST APIs
              </ListItem>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                Hibernate ORM
              </ListItem>
              <ListItem fontSize="sm" color="teal.600">
              <ListIcon as={PiDotOutlineFill} color="teal.600" />
                JWT
              </ListItem>
            </List>
          </Box>
          {/* second column */}
          <Box ml={1}>
            <List spacing={0}>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                React
              </ListItem>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                Google Gemini (AI/ML platform)
              </ListItem>
              <ListItem fontSize="sm" color="teal.600">
                <ListIcon as={PiDotOutlineFill} color="teal.600" />
                Big Query
              </ListItem>
            </List>
          </Box>
          {/* Third column */}
          <Box ml={12}>
            <List spacing={0}>
              <ListItem fontSize="2xl" color="blue.600">
                <a
                  href="https://www.linkedin.com/in/mayankp11/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </ListItem>
              <ListItem fontSize="2xl" color="black" mt={2}>
                <a
                  href="https://github.com/Mayankp11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </ListItem>
              <ListItem fontSize="2xl" color="gray" mt={2}>
                <a
                  href="mailto:mayankpatil892@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiTwotoneMail />
                </a>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default About;
