import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
//import DriveCard from './DriveCard';
import CreditCard from './CreditCard';
import BoxColor from './BoxColor';
//import Rating from '.Rating/';
import Visa from './visa.png';
import MasterCard from './master-card.svg';

const people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const greetings = {
  lang: ['de', 'en', 'es', 'fr'],
  children: ['Ludwig', 'François'],
};
const rgbRef = [
  { r: 255, g: 0, b: 0 },
  { r: 128, g: 255, b: 0 },
];

const maxNumber = [6, 100];

const creditCardsInfos = [
  {
    type: 'Visa',
    number: '0123456789018845',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'BNP',
    owner: 'Maxence Bouret',
    bgColor: '#11aa99',
    color: 'white',
  },
  {
    type: 'MasterCard',
    number: '0123456789010995',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'N26',
    owner: 'Maxence Bouret',
    bgColor: '#eeeeee',
    color: '#222222',
  },
  {
    type: 'Visa',
    number: '0123456789016984',
    expirationMonth: 12,
    expirationYear: 2019,
    bank: 'Name of the Bank',
    owner: 'Firstname Lastname',
    bgColor: '#ddbb55',
    color: 'white',
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="title">IdCard</h1>
      <div className="d-flex flex-column px-2">
        {people.map((person) => {
          return (
            <IdCard
              picture={person.picture}
              firstName={person.firstName}
              lastName={person.lastName}
              gender={person.gender}
              height={person.height}
              birth={`${person.birth}`}
            />
          );
        })}
      </div>
      <div>
        <h1 className="title">Greetings</h1>
        <div className="d-flex flex-column px-2">
          {greetings.children.map((element) => {
            return (
              <Greetings
                children={element}
                lang={element === 'Ludwig' ? 'de' : 'fr'}
              ></Greetings>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="title">Random</h1>
        <div className="d-flex flex-column px-2">
          {maxNumber.map((element) => {
            return <Random max={element} min="1"></Random>;
          })}
        </div>
      </div>
      <div>
        <h1 className="title">BoxColor</h1>
        <div className="boxColor">
          {rgbRef.map((element) => {
            return (
              <BoxColor r={element.r} g={element.g} b={element.b}></BoxColor>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="title">CreditCard</h1>
        <div className="credit-box d-flex px-2">
          {creditCardsInfos.map((element) => {
            return (
              <CreditCard
                type={element.type}
                number={element.number}
                expirationMonth={element.expirationMonth}
                expirationYear={element.expirationYear}
                bank={element.bank}
                owner={element.owner}
                bgColor={element.bgColor}
                color={element.color}
              ></CreditCard>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="title">Rating</h1>
        <div className="d-flex flex-column px-2"></div>
      </div>
      <div>
        <h1 className="title">DriverCard</h1>
        <div className="d-flex flex-column px-2"></div>
      </div>
    </div>
  );
}

export default App;
