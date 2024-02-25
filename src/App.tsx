import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Components/Navbar";
import { Box } from "@chakra-ui/react";
import About from "./pages/About";
import CustomCalendar from "./pages/Calendar";
function App() {
  return (
    <Box h="100vh" w="100vw" display="flex" flexDir="column">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<CustomCalendar />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
