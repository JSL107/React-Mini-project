import './App.css';
import Nav from './components/Navigation/Nav';
import Banner from './components/Banner/Banner';
import HairStyle from './components/HairStyle/HairStyle';
import Reserve from './components/Reserve/Reserve';

function App() {
  return (
    <div className="App">
    
    {/*Navigator 부분*/}
    <Nav />
    {/*이미지 큰 사진 부분*/}
    <Banner />
    
    {/*예약기능 부분*/}
    <Reserve />

    {/* 머리스타일 사진 부분*/}
    <HairStyle />
    </div>
  );
}

export default App;
