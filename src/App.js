
import './App.css';
import Header from "./components/header/header.jsx"
import propArr from './emojiProps';
import cardMap from './components/cards/cardMap';
import Footer from './components/footer/footer';
function App() {
  return (
 
    <div className="App">
     
     <Header />           {/*header component*/}

     <div className='cards'>             
     {propArr.map(cardMap)}          {/*cards component*/}
     </div>

     <Footer />        {/*footer component*/}

    </div>
    
  );
}

export default App;
