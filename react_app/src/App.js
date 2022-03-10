import './App.css';
import Nav from './Components/Navigation/Nav';
import Banner from './Components/Banner/Banner';
import HairStyle from './Components/HairStyle/HairStyle';
import Reserve from './Components/Reserve/Reserve';

function App() {
  return (
    <div className="App">
    
    {/*Navigator 부분*/}
    <Nav />
    {/*이미지 큰 사진 부분*/}
    <Banner />
    {/* 머리스타일 사진 부분*/}
    <HairStyle />
    {/*예약기능 부분*/}
    <Reserve />
    </div>
  );
}

export default App;
