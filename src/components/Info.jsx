import {
  Air,
  Brightness5,
  Brightness6,
  Cloud,
  Dehaze,
  LocationOn,
  Opacity,
  Thermostat,
} from "@mui/icons-material";
import { Box, Typography, responsiveFontSizes, styled } from "@mui/material";

const Row = styled(Typography)({
  padding: 10,
  FontSize: 20,
  letterSpacing:2,
  '& > svg':{
    marginRight: 10
  },
  color: 'white'
});

const Message = styled(Typography)({
  color: 'red',
  margin: 50,
  padding: 20,
  fontWeight: 500 
})

const Info = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box sx={{padding:5, display: 'flex' }}>
      <Box>
      <Row>
        <LocationOn />
        Location: {result.name}, {result.sys.country}
      </Row>
      <Row>
        <Thermostat />
        Temperature: {result.main.temp}°C
      </Row>
      <Row>
        <Opacity />
        Humidity: {result.main.humidity}%
      </Row>
      <Row>
        <Brightness5 />
        Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      </Box>
      <Box sx={{marginLeft:'auto'}}>
      <Row>
        <Brightness6 />
        Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Dehaze />
        Humidity: {result.weather[0].main}
      </Row>
      <Row>
        <Cloud />
        Clouds: {result.clouds.all}%
      </Row>
      <Row>
        <Air/>
        Wind Speed: {result.wind.speed} m/s
      </Row>
      </Box>
    </Box>
  ) : <Message>Please enter the value to check weather</Message>;
};

export default Info;
