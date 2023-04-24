import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CapsCarousel from './components/carousel/1CapCarousel';
import TopCarousel from './components/carousel/2TopCarousel';
import BottomCarousel from './components/carousel/3BottomCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <div className='All-Carousels'>
          <CapsCarousel/>
          <TopCarousel/>
          <BottomCarousel/>
        </div>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
