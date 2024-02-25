import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { Icon } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const navigate = useNavigate();
  return (
    <Box as="header" bg="#363062" p={1} borderRadius={1} boxShadow="sm">
      <HStack
        justifyContent="space-between"
        h={12}
        px={12}
        textAlign="center"
        alignItems="center"
      >
        <Link to="/">
          <Box
            display="flex"
            flexDir="row"
            fontSize="2xl"
            fontWeight="semi-bold"
            color="white"
            gap={1}
          >
            <Icon as={MdOutlinePayment} textAlign="center" my="auto" />
            <Text>calendar</Text>
          </Box>
        </Link>

        {/* Desktop Menu */}
        {isAuthenticated === "true" && (
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/calender">
              <Button colorScheme="whiteAlpha">Calendar</Button>
            </Link>
            <Link to="/about">
              <Button colorScheme="whiteAlpha">About</Button>
            </Link>
            <Button
              colorScheme="whiteAlpha"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </Button>
          </HStack>
        )}

        {localStorage.getItem("isAthenticated") === "false" ? (
          <Link to="/login">
            <Button colorScheme="whiteAlpha">Login</Button>
          </Link>
        ) : (
          <Button
            colorScheme="whiteAlpha"
            onClick={() => {
              localStorage.setItem("isAthenticated", "false");
              navigate("/");
            }}
          >
            Logout
          </Button>
        )}
        {/* {isAuthenticated === "false" ||
          (!isAuthenticated && (
            <Link to="/login">
              <Button colorScheme="whiteAlpha">Login</Button>
            </Link>
          ))} */}

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
        />
      </HStack>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack p={4} display={{ md: "none" }} alignItems="flex-start">
          <CloseButton alignSelf="flex-end" onClick={onClose} />
          {/* Mobile Links */}
          <Link to="/login">
            <Button w="full" colorScheme="whiteAlpha" mb="0.5rem">
              Login
            </Button>
          </Link>
          <Link to="/calender">
            <Button colorScheme="whiteAlpha">Calendar</Button>
          </Link>
          <Link to="/about">
            <Button colorScheme="whiteAlpha">About</Button>
          </Link>
          <Button
            colorScheme="whiteAlpha"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
