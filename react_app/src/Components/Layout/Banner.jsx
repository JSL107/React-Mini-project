import { useState, useEffect } from 'react';
import requests from '../../Requests';
import Axios from '../../Axios'
import './Banner.css';

// axios.js 모듈을 import 하는 구문


const Banner = () => {
  const [hair, setHair] = useState([]); // 초기값 : 빈 배열

  // useEffect() hook
  useEffect(() => {

    async function fetchData() {
      const request = await Axios.get(requests.fetchPerson);

      // console.log(request);

      // 새로 고침 마다 랜덤으로 사진이 바뀌는 코드
      const randomHair = request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ];
      setHair(randomHair);
    }

    fetchData();

  }, []);

  return (
    <header className='banner' style={{
      backgroundSize: "cover",

      // 랜덤사진 불러오기
      // backgroundImage: `url(tmdb api 주소)`,
      // backgroundImage: `url(https://image.tmdb.org/t/p/original/${hair})`,
      
      backgroundImage: `url(https://images.unsplash.com/photo-1585325565018-a80fcd1f4c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
      backgroundPosition: "center center"
    }}>

      {/* Background image */}
      <div className="banner__contents">
        <h1 className="banner__title">CutCut</h1>
        <p className="banner__description">대충 가게 소개하는 글</p>
        
        <button className="reserve__button">예약</button>
      </div>
    </header>        
    )
}

export default Banner