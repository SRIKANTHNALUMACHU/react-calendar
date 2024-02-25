import { Box, Text } from "@chakra-ui/react";
import "./index.css";

const About = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text
        textAlign="center"
        h={100}
        w={500}
        bg="#C5FFF8"
        borderRadius="1xl"
        mt="2rem"
        p="1rem"
      >
        Developed with modern technologies, this is a calender app built using
        React.js as the Javascript library and Chakra UI as the CSS framework
      </Text>
    </Box>
  );
};

export default About;
