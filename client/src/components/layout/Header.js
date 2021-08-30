import '../../App.css';
import styled, { css } from 'styled-components/macro'

import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import { menuData } from '../../data/ManuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search'

const Nav = styled.nav`
   height: 70px;
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem;
   z-index: 100;
   position: fixed;
   top: 0!important;
   width: 100%;
   background: black;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;

`

const Logo = styled(Link)`
   ${NavLink}
   height: 32px;
   margin-left: -10px;
`;

const MenuBars = styled(FaBars)`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      background-size: contain;
      height: 30px;
      width: 30px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-50%, 50%);
      text-decoration: none;
      color: #fff;
   }
`;

const NavMenu = styled.div`
   display: flex;
   align-items: center;
   margin-right: -48px;
   text-decoration: none;

   @media screen and (max-width: 760px) {
      display: none;
   }
`;

const NavMenuLinks = styled(Link)`
   ${NavLink}   
   text-decoration: none!important;
   color: white!important;
`;

const NavBtn = styled.div`
   display: flex;
   align-items: center;
   margin-right: -20px;
   margin-left: 15px;

   @media screen and (max-width: 760px) {
      display: none;
   }
`;
const SearchD = styled.div`
   display: flex;
   align-items: center;
   height: auto;
   width: auto;
   margin-left: 50px;

   @media screen and (max-width: 760px) {
      display: none;
   }
`;
const Cart = styled.div`
   display: flex;
   align-items: center;

   @media screen and (max-width: 760px) {
      display: none;
}
`;

const Header = ({ toggle }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully');
    }
    
    return (
        
            <Nav>
                <Logo to="/">
                    <img src="/images/brend.png" />
                </Logo>

                <MenuBars onClick={toggle} />
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>

                <SearchD>
                    <Route render={({ history }) => <Search history={history} />} />
                </SearchD>

                    <Cart>
                        <Link to="/cart" style={{ textDecoration: 'none' }} >
                            <span id="cart" className="ml-3">Korpa</span>
                            <span className="ml-1" id="cart_count">{cartItems.length}</span>
                        </Link>
                    

                    {user ? (

                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4 mb-8"
                                type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </Link>


                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Komandna tabla</Link>

                                )}
                                <Link className="dropdown-item" to="/orders/me">Moje porudžbine</Link>
                                <Link className="dropdown-item" to="/me">Moj profil</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Odjava
                                </Link>
                            </div>

                        </div>

                    ) : !loading &&

                    <NavBtn>
                        <Button to="/login" className="btn ml-4" id="login_btn">Prijava </Button>
                        <Button to="/register" className="btn ml-4" id="register_btn">Registracija</Button>
                    </NavBtn>
                    }
                    </Cart>

            </Nav>
        
    )
}


export default Header;

