import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../gamemandu.png';
import styled from 'styled-components';
import {Button} from "./Button";
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm'>
                <Link to="/">
                        <img src={logo} alt ="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <Button>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </Button>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainWR);
.nav-link{
    color:var(--mainBlue);
    font-size:1.3rem;
    text-transform:capitalize;
}
`
export default Navbar;
