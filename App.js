import './App.css';
import Home from './components/Navigation';
import Quality from './components/Quality';
import Slide from './components/Slide';
import Products from './components/Products';
import Footer from './components/Footer';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
      <Home />
      <Slide />
      <Quality />
      <Products />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
