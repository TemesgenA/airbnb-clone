import Nav from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import './App.css';
import image from './images/katie-zaferes.png';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card 
      img= {image}
      rating= '5.0'
      reviewCount= '6'
      country= 'USA'
      title= 'Life Lessons with Katie Zaferes'
      price= '136'
      />
    </div>
  );
}

export default App;
