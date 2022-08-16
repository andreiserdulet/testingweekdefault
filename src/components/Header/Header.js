import * as React from 'react';
import './index.css';
import endavaLogo from '../../assets/endava-logo.png'
import { motion } from 'framer-motion';
export default function Header({ children }) {


    return (
        <div className='header'>
            <div>
                <motion.img
                    className='header--img-logo'
                    drag
                    src={endavaLogo}
                    alt="logo"/>
            </div>

            <div className='header--title'>
                <input defaultValue='Testing Week - Bug Hunt!' onSelect={
                    (event) => {
                        event.preventDefault()
                        document.getElementById('testing').innerText = 'A selection bug!!!'
                    }
                }/>
                <p id='testing'></p>
            </div>
            <div className='header--timer'>
                {children}
            </div>
        </div>
    )
}