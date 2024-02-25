import PayrollImage from "../../assets/background-image-1.jpg";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Button,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCalendar from "../Calendar";
const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const onClickLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (isLoggedIn === "false") {
      localStorage.setItem("isLoggedIn", "true");
      location.reload();
    }
  }, []);
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <Box
      backgroundColor="#ECF8F9"
      textAlign="center"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignContent="center"
      backgroundImage={PayrollImage}
      bgRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        display="flex"
        gap={5}
        color="white"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        flexDir="column"
        marginTop={5}
        height="80vh"
      >
        <Box
          width={320}
          height={230}
          bg="#191D88"
          rounded={5}
          alignContent="center"
          boxShadow="2xl"
        >
          {" "}
          React Calendar
          <Text color="#E7F6F2" p={2}>
            {" "}
            Welcome to our React Calendar application!<br></br> Designed with
            simplicity and functionality in mind, our calendar helps you stay
            organized and efficient in managing your schedule.
          </Text>
          {localStorage.getItem("isAthenticated") === "true" ? (
            <Button
              colorScheme="teal"
              onClick={() => {
                navigate("/calendar");
              }}
            >
              Go to Calendar
            </Button>
          ) : (
            <Button colorScheme="teal" onClick={onClickLogin}>
              Login
            </Button>
          )}
        </Box>
      </Box>
      <Box position="fixed" bottom="0" height="4rem" width="100vw">
        {" "}
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container
            as={Stack}
            maxW={"4xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2024 React Calendar Application. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
