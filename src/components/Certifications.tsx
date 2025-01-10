import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import GeminiAppDev from "../Images/Certificates/Gemini-for app dev.png";
import AWSCloudPractitioner from "../Images/Certificates/AWS-Certified-Cloud-Practitioner_badge.png";
import MoshCode from "../Images/Certificates/Mosh-Code.png";

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      img: AWSCloudPractitioner,
    },
    {
      name: "Gemini for App Development",
      img: GeminiAppDev,
    },
    {
      name: "Sample Certificate 1",
      img: MoshCode,
    },
    {
      name: "Sample Certificate 2",
      img: "", // Add an image or fallback here
    },
    {
      name: "Sample Certificate 3",
      img: "", // Add an image or fallback here
    },
    {
      name: "Sample Certificate 4",
      img: "", // Add an image or fallback here
    },
  ];

  return (
    <>
      <Heading fontSize="3xl" fontFamily="serif" textAlign={"center"}>
        Certificates
      </Heading>

      <Grid
        mt={4}
        templateColumns={{
          base: "repeat(2, 1fr)", // Corrected base value
          sm: "repeat(3, 1fr)", // Sm and larger breakpoints adjusted
          lg: "repeat(5, 1fr)", // For large screens
        }}
        gap={4} // Increased gap between grid items
        maxWidth={"1700px"} // Set a max width for the grid
        justifyContent={"center"} // Center the grid horizontally
        mx={"auto"} // Center the grid horizontally
      >
        {certifications.map((certification, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            m={1}
          >
            <Box
              borderRadius="full"
              border="2px solid #ddd"
              width={["100px", "150px", "200px"]} // Set box size based on breakpoints
              height={["100px", "150px", "200px"]} // Ensure the height matches the width for the circle
              p={0}
              boxShadow="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              overflow="hidden" // Ensure content is clipped to the circle's boundary
            >
              {certification.img ? (
                <Image
                  src={certification.img}
                  alt={certification.name}
                  objectFit="cover" // Ensures the image covers the full box area
                  width="100%" // Fill the entire box width
                  height="100%" // Fill the entire box height
                />
              ) : (
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bg="gray.200"
                  borderRadius="full"
                >
                  <span>{certification.name}</span> {/* Fallback text */}
                </Box>
              )}
            </Box>
            {/* Text */}
            <Text mt={2} textAlign="center">
              {certification.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Certifications;
