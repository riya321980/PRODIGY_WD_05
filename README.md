Weather Website
This project is a weather forecasting website built using React.js and Material-UI, and it fetches weather data from the OpenWeather API. The site provides current weather information and forecasts for different locations worldwide.

Display current weather information for a searched location.
Show weather forecasts for the next few days.
User-friendly and responsive design using Material-UI.
Real-time data fetching from the OpenWeather API.

Installation
Clone the repository:

Copy code

git clone https://github.com/SachanAryan/weather-check
cd weather-website

Install dependencies:

npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:3000 to see the website in action.

API Key Setup
To use the OpenWeather API, you need an API key. Follow these steps to set it up:

Go to OpenWeather API and sign up for an account.

Once you have signed up, navigate to the API Keys section and generate a new API key.

Create a .env file in the root of the project and add your API key:

REACT_APP_OPENWEATHER_API_KEY=your_api_key_here

Project Structure

weather-website/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   └── ...
│   ├── pages/
│   │   └──Home.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
Technologies Used
React.js: A JavaScript library for building user interfaces.
Material-UI: A popular React UI framework for building responsive and aesthetically pleasing user interfaces.
OpenWeather API: Provides weather data, including current conditions, forecasts, and historical data.

Contributions are welcome! Please open an issue or submit a pull request if you have any changes or improvements.