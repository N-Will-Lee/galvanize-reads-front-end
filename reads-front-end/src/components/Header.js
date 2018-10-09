import React, { Component } from 'react';
import logo from '../books.png'
const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h5 className="App-title">Galvanize Reads</h5>
        </header>
    )
}

export default Header
