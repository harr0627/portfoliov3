import { v4 as uuidv4 } from 'uuid';
import WeatherImg from '../assets/images/weather.png';
import CryptoImg from '../assets/images/crypto.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Crypto Tracker',
    desc: 'A web app that utilizes coingecko API to allow users to search cryptocurrencies to find current stats.',
    img: CryptoImg,
    site: 'https://harr0627.github.io/react-crypto-search/',
    code: 'https://github.com/harr0627/react-crypto-search',
  },
  {
    id: uuidv4(),
    name: 'Weather',
    desc: 'A web app that shows current weather stats for a users chosen destination.',
    img: WeatherImg,
    site: 'https://harr0627.github.io/mad9135-c1-html5-weather/',
    code: 'https://github.com/harr0627/mad9135-c1-html5-weather',
  },
];

export default projects;
