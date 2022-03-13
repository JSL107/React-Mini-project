import React, { useContext, useState } from 'react';
import './Haircut.css'
import HairContext from '../Store/HairContext'
import Button from '../Commons/Button'
import Modal from '../Reserve/Modal'

const Haircut = (props) => {
  const hairContext = useContext(HairContext);
    
  const submitHandler = (name) => {
    
    const hair = {
      id: props.id,
      image: props.image,
      name: name,
      price: props.price
    }
    console.log(hair);
    hairContext.addItem(hair);
  }

  //modal창 열림
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <div className='hairContent'>
      <Button type='submit' onClick={submitHandler}>
        {/* <img src="https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80"/> */}
        <img className="hairImage" src={props.image}/>
      </Button>
      <div className='styleText'>
        <div className='hairName'><h1>{props.name}</h1></div>
        <div className='hairPrice'>{props.price}</div>
      </div>

      <button onClick={openModal} className="reserveButton">선택</button>
          <Modal open={modalOpen} close={closeModal} header="예약정보를 입력해주세요">
          </Modal>
    </div>
  )
}

export default Haircut


