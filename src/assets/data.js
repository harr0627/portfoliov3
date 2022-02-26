import { v4 as uuidv4 } from 'uuid';
import WeatherImg from '../assets/images/weather.png';
import CryptoImg from '../assets/images/crypto.png';
import QuestImg from '../assets/images/questpoint.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Crypto Tracker',
    desc: 'A web app that utilizes coingecko API to allow users to search cryptocurrencies to find current stats. This app is built with functional react.',
    img: CryptoImg,
    site: 'https://harr0627.github.io/react-crypto-search/',
    code: 'https://github.com/harr0627/react-crypto-search',
  },
  {
    id: uuidv4(),
    name: 'Quest Point',
    desc: 'Quest Point is a task app where users can add, complete and delete tasks. This app uses React Native and expo. User data is saved using async storage.',
    img: QuestImg,
    site: 'https://expo.dev/@harr0627/react-final-quest-point',
    code: 'https://github.com/harr0627/mad9135-p2-react-native-final',
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
