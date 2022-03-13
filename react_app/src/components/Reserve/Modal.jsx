import React, { useState, useContext } from 'react';
import './Modal.css'
import Calender from './Calender'
import HairContext from '../Store/HairContext'
import ReservationItem from '../Store/ReservationItem';


const hairDesign = [
  {
      id: "cut1",
      name: "여성 커트일반",
      price: 2.5,
  },
  {
      id: "cut2",
      name: "남성 커트일반",
      price: 2.5,
  },
  {
      id: "cut3",
      name: "염색",
      price: 2.2,
  },

  {
      id: "cut4",
      name: "드라이",
      price: 3.5,
  },
  {
      id: "cut5",
      name: "펌",
      price: 5.5,
  }
];


const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  //장바구니
  const [hairs, setHairs] = useState(hairDesign);
  const hairContext=useContext(HairContext);

  const hairItems=(
    <ul>
      {hairContext.items.map((hair)=>(
        <ReservationItem
          key={hair.id}
          name={hair.name}
          price={hair.price}
        />
      ))}
    </ul>
  )

  const reservationContent=(
    <>
      {/*헤어 스타일 선택내역*/}
      {hairItems}
      {/* 선택한 날짜*/}
      ㅇㅇㅇㅇ
      {/*총 가격*/}

    </>
  )

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>&times;</button>
          </header>

          <Calender />
          
          <div>
            <h3>예약 내역</h3>
            {reservationContent}
          </div>


          <footer>
            <button className='finish'>선택완료</button>
            <button className="close" onClick={close}>닫기</button>
          </footer>

        </section>
      ) : null}
    </div>
    );
  };

export default Modal