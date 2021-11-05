import React, { useState } from 'react'
import { menuItems } from "./MenuItem";
import Logo from '../images/logo.png'

export default function NavBar() {
    
    const [state, setState] = useState({
        click: false
    })


    const handleClick = ()=>{
        setState({
            click: !state.click
        })
    }
    
    return (
        <nav className = {"navBarItems"}>
            <h1 className = {"nav-log"}><img src={Logo} /></h1>
            <div className = {"menu-icon"} onClick = {handleClick}>
                <i className = {state.click?"fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className = {state.click? "nav-menu active": "nav-menu"}>
                {
                    menuItems.map((item,key)=>{
                        return (
                            <li key={key}><span  onClick={()=> window.open(item.url)} className = {item.cName}>{item.title}</span></li>
                        )
                    })
                }
            </ul>

        </nav>
    )
}
