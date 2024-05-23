import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import { Box, ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [colorMode, setColorMode] = useState("light");

  const theme = extendTheme({
    initialColorMode: colorMode,
    useSystemColorMode: false,
  });

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Box bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"} minH="100vh">
        <Header toggleColorMode={toggleColorMode} colorMode={colorMode} />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
  </ChakraProvider>
  );
}

export default App;
