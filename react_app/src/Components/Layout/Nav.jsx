import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show}`}>
            <h2 className='nav__store__title'>Cut Cut</h2>
            <a href="" className='nav__side__menu'>RESERVE</a>
            <a href="" className='nav__side__menu'>HOME</a>

            {/* 후에 modal창으로 띄우기 */}

        </div>
    )
}

export default Nav