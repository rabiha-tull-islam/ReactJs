import React, { useState } from 'react'
// import styled from 'styled-components'
import "../App.css"
import About from './About'
import HeaderBtn from './HeaderBtn'
import NavBar from './NavBar'

const Header = () => {
   
    return (
        <div>
            <div className="Header-img" id="home">
                <div class="Header_text">
                    <h1 class="text-center text-light">Hello, I'm <span class="text-danger">Hamza Mughal</span>. <br /> I'm a
                        Full-Stack Developer.</h1>
                        <HeaderBtn/>
                </div>
                <NavBar/>
            </div>
            <About/>
        </div>

    )
}

export default Header
