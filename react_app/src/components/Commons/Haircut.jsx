import React, { useContext } from 'react'
import './Haircut.css'
import HairContext from '../Store/HairContext'
import Button from '../Commons/Button'


const Haircut = (props) => {
  const hairContext = useContext(HairContext);
    
  const submitHandler = (name) => {

    const hair = {
      id: props.id,
      name: props.name,
      price: props.price
    }
    console.log(hair.id);
 
    hairContext.addItem(hair);
  }


  return (
    <>
      <div className='hairContent'>
        <Button type='submit' onClick={submitHandler}>
          <img src="https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80"/>
        </Button>
        <div className='styleText'>
          <div className='hairName'>{props.name}</div>
          <div className='hairPrice'>{props.price}</div>
        </div>    
        
      </div>

    </>
    
  )
}

export default Haircut


