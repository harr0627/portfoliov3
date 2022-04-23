import { v4 as uuidv4 } from 'uuid';
import WeatherImg from '../assets/images/weather.png';
import WildRoga from '../assets/images/wildRoga.png';
import CryptoImg from '../assets/images/crypto.png';
import QuestImg from '../assets/images/questpoint.png';
import GithubSearch from '../assets/images/github-search.png';

const projects = [
  {
    id: uuidv4(),
    name: 'WildRoga',
    desc: `WildRoga is a yoga and wellness app that offers pre-recorded content, live streams and community wall for users to interact with instructor content. This app was built with React Native utilizing Firebase for data storage, MUX for broadcast channel, and Stripe for payment processing.`,
    img: WildRoga,
    site: 'https://github.com/harr0627/WildRoga',
    code: 'https://github.com/harr0627/WildRoga',
  },
  {
    id: uuidv4(),
    name: 'Weather',
    desc: `A web app that shows current weather stats for a users chosen destination. The application allows users to search for or get information based on their location. This application is built with HTML CSS and JavaScript. The API's I utilized are locationIQ and OpenWeather.`,
    img: WeatherImg,
    site: 'https://harr0627.github.io/mad9135-c1-html5-weather/',
    code: 'https://github.com/harr0627/mad9135-c1-html5-weather',
  },
  {
    id: uuidv4(),
    name: 'GitHub Search',
    desc: 'This iOS app searches for github users. The user can view github user stats and visit github account. This app was built with SwiftUI and utilizes multiple packages such as Alamofire for HTTP networking and Kingfisher for image caching. ',
    img: GithubSearch,
    code: 'https://github.com/harr0627/mad9135-p2-react-native-final',
  },
  {
    id: uuidv4(),
    name: 'Crypto Tracker',
    desc: 'This cryptocurrency tracker is built with react. The web app allows users to search for their chosen cryptocurrency and see its value based on CAD or USD. Additionally it shows the current volume and market cap.',
    img: CryptoImg,
    site: 'https://harr0627.github.io/react-crypto-search/',
    code: 'https://github.com/harr0627/react-crypto-search',
  },
];

export default projects;
