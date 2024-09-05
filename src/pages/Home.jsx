import { useState } from "react";
import { Box, styled } from "@mui/material";
import Sunset from "../assets/bg.jpg";
import Form from "../components/Form.jsx";
import Info from "../components/Info.jsx";

const Component = styled(Box)({
  height: "90vh",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "75%",
  backgroundImage: `url(${Sunset})`,
  backgroundSize: "cover",
  borderRadius:20,
  boxShadow: "0 0 10px 0 rgba(0, 0, 0)",
});

const Container = styled(Box)({
  width: "75%",
  height: "80%",
  margin: "auto", 
});

const Home = () => {
  const [result, setResult] = useState({});

  return (
    <Component>
      <Container>
        <Form setResult={setResult} />
        <Info result={result} />
      </Container>
    </Component>
  );
};

export default Home;
