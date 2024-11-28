import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Carousel from './Carousel';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Tailwind test cs</h1>
         <div className = "pt-8 pl-5 pr-5">
          <Carousel />
        </div>
        <div className = "pt-8 pl-5 pr-5 flex space-x-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
       
    </div>
  );
}

export default App;
