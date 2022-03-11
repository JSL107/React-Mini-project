import React, { useState,  useContext } from 'react'
import Button from '../Commons/Button'
import Haircut from '../Commons/Haircut';
import HairContext from '../Store/HairContext'
import './HairStyle.css'


// const hairButton=document.querySelector('.hairBox')
// console.log(hairButton);

const hairDesign = [
    {
        id: "cut1",
        name: "cut1",
        price: 10.57,
    },
    {
        id: "cut2",
        name: "cut2",
        price: 12.97,
    },
    {
        id: "cut3",
        name: "cut3",
        price: 15.55,
    },

    {
        id: "cut4",
        name: "cut4",
        price: 16.92,
    },
    {
        id: "cut5",
        name: "cut5",
        price: 15.92,
    }
];


const HairStyle = () => {
    const [hairs, setHairs] = useState(hairDesign);

    const hairList = hairs.map(hair =>
        <Haircut
            key={hair.id}
            id={hair.id}
            name={hair.name}
            price={hair.price}
        />
        )

    // const hairValue = document.getElementById('name');
    // console.log(hairValue);

    // const hairContext = useContext(HairContext);
    
    // const submitHandler = (name) => {
    //     //event.preventDefault();
    //     console.log(name);

    //     const hair = {
    //         id: props.id,
    //         name: props.name,
    //         price: props.price
    //     }
        
    //     hairContext.addItem(hair);
    // }

   
    return (
        <div>
        {/* <div className='hairContent'> */}
            <>
                {hairList}
            </>
        </div>
    )
}

export default HairStyle