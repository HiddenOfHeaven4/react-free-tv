import React, { Component } from 'react';
import { Container, Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NationalFootballLeague from '../pages/NationalFootballLeague';
import Home from '../pages/Home';
import NationalBasketballLeague from '../pages/NationalBasketballLeague';
import Donate from '../pages/Donate';
import NationalHockeyLeague from '../pages/NationalHockeyLeague';
import MajorLeagueBaseball from '../pages/MajorLeagueBaseball';

export default class Header extends Component {
    render() {
        return (
            <>
           <Navbar sticky='top' bg='dark' expand='md' variant='dark'>
               <Container>
                   <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='Logo'
                        /> Hidden Broadcasts
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                   <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto my-2 my-lg-0'>
                            <Nav.Link href="/NationalHockeyLeague">NHL</Nav.Link>
                            <Nav.Link href="/NationalBasketballLeague">NBA</Nav.Link>
                            <Nav.Link href="/NationalFootballLeague">NFL</Nav.Link>
                            <Nav.Link href="/MajorLeagueBaseball">MLB</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/donate">Помощь проекту</Nav.Link>
                        </Nav>
                   </Navbar.Collapse>
               </Container>
           </Navbar>

            <Router>
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/NationalHockeyLeague' element={<NationalHockeyLeague/>}/>
                        <Route path='/NationalBasketballLeague' element={<NationalBasketballLeague/>}/>
                        <Route path='/NationalFootballLeague' element={<NationalFootballLeague/>}/>
                        <Route path='/MajorLeagueBaseball' element={<MajorLeagueBaseball/>}/>
                        <Route path='/donate' element={<Donate/>}/>
                </Routes>
            </Router>           
           </>
        );
    }
}