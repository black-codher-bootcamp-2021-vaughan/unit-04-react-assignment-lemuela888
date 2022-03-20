import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
        <div id="header">
            <h1>Media Store</h1>
            <Link to="/" id="homelink"> Home </Link> |
            <Link to="/about" id="aboutlink"> About </Link>  |
            <Link to="/basket" id="basketlink"> Basket ({props.itemCount})</Link>
        </div>
      );
    }

export default Header;