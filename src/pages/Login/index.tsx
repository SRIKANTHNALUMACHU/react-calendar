import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import image from "../../assets/background-image-2.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async () => {
    if (username === "admin" && password === "12345") {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3500,
        isClosable: true,
      });
      localStorage.setItem("isAthenticated", "true");
      navigate("/calendar", { replace: true });
    } else {
      toast({
        title: "Login Failed",
        description: "Please use username:admin and password:12345 to login",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };
  return (
    <Box backgroundImage={image} w="100vw" h="100vh">
      <Box
        p={4}
        maxW="md"
        borderWidth={1}
        borderRadius="md"
        boxShadow="2xl"
        bg="#FFFBF5"
        marginX="auto"
        marginTop="12rem"
      >
        <Input
          mb={4}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          mb={4}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>

        <Text color="#526D82">Username:admin & Password : 12345</Text>
      </Box>
    </Box>
  );
};
export default Login;
