import React, { useState, useContext } from 'react';
import './Modal.css'
import Calender from './Calender'
import HairContext from '../Store/HairContext'
import ReservationItem from '../Store/ReservationItem';
import DatePicker from "react-datepicker";

const hairDesign = [
  {
      id: "cut1",
      image: "https://images.unsplash.com/photo-1615363001828-acfd7ac403cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "여성 커트일반",
      price: 2.5,
  },
  {
      id: "cut2",
      image: "https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80",
      name: "남성 커트일반",
      price: 2.5,
  },
  {
    id: "cut3",
    image: "https://images.unsplash.com/photo-1617896848219-5ec29570d680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "염색",
    price: 2.2,
  },
  
  {
    id: "cut4",
      image: "https://images.unsplash.com/photo-1620122830785-a18b43585b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "드라이",
      price: 3.5,
    },
    {
      id: "cut5",
      image: "https://images.unsplash.com/photo-1629617375711-8f591cfa357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      name: "펌",
      price: 5.5,
    }
  ];
  
  
  const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    const [startDate, setStartDate] = useState(new Date());
    
    // //장바구니
    // const [hairs, setHairs] = useState(hairDesign);
    <DatePicker
    selected={startDate}
    onChange={(date) => {
          const d = new Date(date);
          setStartDate(d);
          
        }}/>
        
        function btn(event) {
          // alert(d + + props.header + "를 예약했습니다.");
      }
  const hairContext=useContext(HairContext);
  const hairItems=(
    <ul>
      {hairContext.items.map((hair)=>(
        <ReservationItem
        key={hair.id}
        name={hair.name}
        price={hair.price}
        image={hair.image}
        />
      ))}
    </ul>
  )

  const reservationContent=(
    <>
      {/*헤어 스타일 선택내역*/}
      {hairItems}
      {/*총 가격*/}

    </>
  )

// console.log(Calender());
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>&times;</button>
          </header>
          {/* 사진 띄우는  */}
          <img src={props.children[0].props.src}/>


          <Calender />

          <footer>
          <button onClick={btn}>선택완료</button>
          <button onClick={props.close}>닫기</button>
          </footer>
          
        </section>
      ) : null}
    </div>
    );
  };

export {hairDesign}
export default Modal