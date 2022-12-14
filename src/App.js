import Nav from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import './App.css';
import data from './data';

function App() {
  const cardData = data.map(item => {
    return <Card
    key= {item.id}
    {...item}
     />
  });
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className='all-cards'>{cardData}</div>
    </div>
  );
}

export default App;
