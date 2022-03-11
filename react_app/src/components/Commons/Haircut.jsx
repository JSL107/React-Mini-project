import React, { useContext } from 'react'
import classes from './Haircut.css'

const Haircut = (props) => {

  // Book
  const hairCut = {
    id: props.id,
    name: props.name,
    price: props.price,
  }

  // console.log(props.id);

  return (
    <>
      <div className={classes.book}>
      <h3>{props.name}</h3>
      </div>

      <div className={classes.book}>
      <h3>{props.price} 원</h3>
      </div>
    </>
    
  )
}

export default Haircut


