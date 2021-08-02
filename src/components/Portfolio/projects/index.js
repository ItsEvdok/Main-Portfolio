import buzzin from '../../../assets/screenshots/StayBuzzin.png';
import vocab from '../../../assets/screenshots/Vocab.png';
import proximo from '../../../assets/screenshots/Proximo.png';
import weather from '../../../assets/screenshots/Weather.png';
import notes from '../../../assets/screenshots/Notetaker.png';
import techBlog from '../../../assets/screenshots/TechBlog.png';

const projects = [
    {
        name: 'StayBuzzin',
        description: 'A simple social media app, sign up, make a post, make some friends, and have a great time.',
        screenshot: buzzin,
        repo: 'https://github.com/Landonwilson1/StayBuzzin.net',
        url: 'https://staybuzzin.herokuapp.com/',
    },
    {
        name: 'VocabQuiz',
        description: 'A fun little vocabulary learning quiz, jeopardy/hangman mix-up, great for children to learn new words whenever they would like.',
        screenshot: vocab,
        repo: 'https://github.com/Natallie01/vocab-quiz',
        url: 'https://natallie01.github.io/vocab-quiz/',
    },
    {
        name: 'Proximo',
        description: 'A proximity based chat app, where users within a certain radius can chat anonymously or add other users as friends for private chatting.',
        screenshot: proximo,
        repo: 'https://github.com/iiTONELOC/proximo',
        url: 'https://blooming-wildwood-24520.herokuapp.com/',
    },
    {
        name: 'Weather-Dashboard',
        description: 'A simple weather app that lets you search up a cities weather and get a 24 hour forecast, as well as a 5 day forecast.',
        screenshot: weather,
        repo: 'https://github.com/ItsEvdok/Weather-Dashboard',
        url: 'https://itsevdok.github.io/Weather-Dashboard/',
    },
    {
        name: 'Express-Note-Taker',
        description: 'An express based note taking app that lets you make notes for yourself to help you stay organized thought the day.',
        screenshot: notes,
        repo: 'https://github.com/ItsEvdok/Express-Note-Taker',
        url: 'https://damp-waters-71040.herokuapp.com/',
    },
    {
        name: 'The_Tech_Blog',
        description: 'A sequelize based social application that lets you make posts, comment on other users posts as well as add friends.weather',
        screenshot: techBlog,
        repo: 'https://github.com/ItsEvdok/The-Tech-Blog',
        url: 'https://thetechblog123.herokuapp.com/',
    }
];

export default projects;