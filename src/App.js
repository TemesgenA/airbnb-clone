import Nav from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import './App.css';
import data from './data';

function App() {
  const cardData = data.map(singleCardData => {
    return <Card
    coverImg= {singleCardData.coverImg}
    rating= {singleCardData.stats.rating}
    reviewCount= {singleCardData.stats.reviewCount}
    location= {singleCardData.location}
    title= {singleCardData.title}
    price= {singleCardData.price}
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
