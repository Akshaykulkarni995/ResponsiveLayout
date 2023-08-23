import { Box, Container, CssBaseline, styled } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const BodyContainer = styled(Container)`
  background-color: #fcfcfc;
  /* margin-top: 68px; */
  padding: 4rem 4.5rem 4.5rem 4.5rem !important;
`;
function App() {
  return (
    <Box className="App">
      <CssBaseline />
      <Header />
      <BodyContainer maxWidth="xl">
        <Home />
      </BodyContainer>
      <Footer copyRight="Copyright 2023 ROCKS UNLIMITED" />
    </Box>
  );
}

export default App;
