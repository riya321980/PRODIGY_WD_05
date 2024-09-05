import { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  background: "#445A6F",
  display: "flex",
  padding: 10,
  borderRadius: 8,
  width: "100%"
});

const Input = styled(InputBase)({
  color: "#FFF",
  fontSize: 18,
});

const GetButton = styled(Button)({
  backgroundColor: "#e67e22",
  width: 150,
  marginLeft: "auto",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "Delhi", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" name="city" onChange={(e) => handleChange(e)} />
      <Input
        placeholder="Country"
        name="country"
        sx={{
          marginLeft: "auto",
        }}
        onChange={(e) => handleChange(e)}
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
