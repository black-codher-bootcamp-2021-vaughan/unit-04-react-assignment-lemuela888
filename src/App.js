import './App.css';
import Product from './components/Product';
import ProductList from './components/ProductList';
import data from './models/data.json';
import Basket from './components/Basket';
import {useState} from 'react';

const Products = [
  { trackName:"Thinkin Bout You", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Orange", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Forrest Gump", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Bad Religion", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Orange Crush", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Pilot Jones", trackPrice:"1.29", borderColour:"black" },
  { trackName:"September 29, 2016 - Blood Orange", trackPrice:"1.99", borderColour:"black" },
  { trackName:"White (feat. John Mayer)", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Not Just money", trackPrice:"1.29", borderColour:"black" },
  { trackName:"End", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Start", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Orange Blossom Special", trackPrice:"1.29", borderColour:"black" },
  { trackName:"Stranger Things Have Happened", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Orange County", trackPrice:"12.99", borderColour:"black" },
  { trackName:"Orange", trackPrice:"0.99", borderColour:"black" },
  { trackName:"Southern Hospitality", trackPrice:"1.99", borderColour:"black" },
  { trackName:"The Honeymoon Is Over", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Finale, Pt. 2: Are You In or Out?", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Finale, Pt. I: Let Them Eat Cake", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Reunion, Pt. 1", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Who's Laughing Now", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Reunion, Pt. 2", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Rumble in the Jungle", trackPrice:"1.99", borderColour:"black" },
  { trackName:"The Burn Orange Hersey", trackPrice:"12.99", borderColour:"black" },
  { trackName:"Dirty Housewives", trackPrice:"1.99", borderColour:"black" },
  { trackName:"He Said What?", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Will He or Won't He?", trackPrice:"1.99", borderColour:"black" },
  { trackName:"What's New, Pussycat?", trackPrice:"1.99", borderColour:"black" },
  { trackName:"The Party's Over", trackPrice:"1.99", borderColour:"black" },
  { trackName:"Bowling For Champs", trackPrice:"1.99", borderColour:"black" }
]; 

function App() {
  console.log("These are all the tracks", Products)
  const [BasketItems, setBasketItems] = useState([])

  return (
    <>
      <h1>Media Store App</h1>
     <ProductList Products= {Products} />
    </>

  );
}

export default App;
