import React, { useState } from 'react'
import Button from '../Commons/Button'
import Haircut from '../Commons/Haircut';
import './HairStyle.css'


const submitHandler = (event) => {
    event.preventDefault();
    console.log('submitHandler called');
}

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
    const [hairs, setHairs] = useState([]);



    const hairList = hairDesign.map(hair =>
        <Haircut
            key={hair.id}
            id={hair.id}
            name={hair.name}
            price={hair.price}
        />
        )
        // console.log(hairList[0]);



    return (
        <div className='hairContent'>

            <Button type='submit' onClick={submitHandler} className='hairBox'>
                <div className='styleImage'>
                    <img src="https://images.unsplash.com/photo-1620122830785-a18b43585b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
                <div className='styleText'>
                    <div className='hairName'>{hairList[0]}</div>
                </div>
            </Button>

            <Button type='submit' onClick={submitHandler} className='hairBox'>
                <div className='styleImage'>
                    <img src="https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80" alt="" />
                </div>
                <div className='styleText'>
                    <div className='hairName'>{hairList[1]}</div>
                </div>
            </Button>

            <Button type='submit' onClick={submitHandler} className='hairBox'>
                <div className='styleImage'>
                    <img src="https://images.unsplash.com/photo-1617896848219-5ec29570d680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
                <div className='styleText'>
                    <div className='hairName'>{hairList[2]}</div>
                </div>
            </Button>

            <Button type='submit' onClick={submitHandler} className='hairBox'>
                <div className='styleImage'>
                    <img src="https://images.unsplash.com/photo-1615363001828-acfd7ac403cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
                <div className='styleText'>
                    <div className='hairName'>{hairList[3]}</div>
                </div>
            </Button>

            <Button type='submit' onClick={submitHandler} className='hairBox'>
                <div className='styleImage'>
                    <img src="https://images.unsplash.com/photo-1629617375711-8f591cfa357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt="" />
                </div>
                <div className='styleText'>
                    <div className='hairName'>{hairList[4]}</div>
                </div>
            </Button>


        </div>
    )
}

export default HairStyle