import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavbar } from '../Context/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth } from '../Context/LoginContext';
import { Avatar, Box } from '@mui/material';
import { primaryBlue, primaryGray, secondaryGray } from '../Static/Colors';
import MiniNavbar from './miniNavbar';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded'; 
import { Button, NavDropdown, Row } from 'react-bootstrap';
import PaidIcon from '@mui/icons-material/Paid';
import { useDispatch } from 'react-redux';
import { ROADMAP_RESET } from '../Constants/roadmap';
 function Header() {
    const [selected,setSelected]=useState("home")
    const { setNavbarClicked, navbarClicked } = useNavbar();
    const {user,logout}=useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()


   
    return (
        <>
            <Navbar style={{ position: 'absolute', left: '0', right: '0', top: '0', width: '100vw', height: '5rem', zIndex: '20' }} expand="lg" className="navbar ScreenNavbar bg-body-tertiary ">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: 'black', fontWeight: 'bolder' }}>InterviewCrusher </Navbar.Brand>
                    <Navbar.Toggle onClick={() => { setNavbarClicked(!navbarClicked) }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ position: 'relative', marginLeft: 'auto' }} className="me-auto">   
                        {
                            user &&
                            user.isPremium &&
                            <NavDropdown style={{zIndex:"30",color:'black'}} title="admin" id="basic-nav-dropdown">
                            <Link  style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color:  "black" }} onClick={() => setSelected("home")} to="/admin/QuizEdit" >quiz</Link>
                            <Link  style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color:  "black" }} onClick={() => setSelected("home")} to="/admin/AlgorithmEdit" >algo</Link>
                            <Link  style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color:  "black" }} onClick={() => setSelected("home")} to="/admin/VideoEdit" >video</Link>
                            <Link  style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color:  "black" }} onClick={() => setSelected("home")} to="/admin/ChapterEdit" >chapter</Link>
                          </NavDropdown>
                        }
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "home" ? "#1CABFC" : "black" }} onClick={() => setSelected("home")} to="/" >Home</Link>
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "profile" ? "#1CABFC" : "black" }} onClick={() => setSelected("profile")} to="/profile_data">Profile</Link>
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "explore" ? "#1CABFC" : "black" }} onClick={() => setSelected("explore")} href="#link">Explore</Link>
                            {user === null ?
                                <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "signin" ? "#1CABFC" : "black" }} onClick={() => setSelected("signin")} href="/login">Sign In</Link>
                                :
                                <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "signin" ? "#1CABFC" : "black" }} onClick={() => logout()} to="#">Sign out</Link>
                            }
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "topusers" ? "#1CABFC" : "black" }} onClick={() => setSelected("topusers")} to="#link">Top Users</Link>
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "resetroadmap" ? "#1CABFC" : "black" }} onClick={(e) =>{ e.preventDefault();setSelected("resetroadmap"); dispatch({type:ROADMAP_RESET});navigate("/RoadMapPage");localStorage.removeItem("roadmapId")}} to="#link">New lectures</Link>

                        </Nav>
                        {user && user?.email ?
                        <>
                            <strong>
                                {user?.money}
                            </strong>
                            <PaidIcon/>
                            <Avatar  sx={{ background: primaryGray }}  >  {user?.email[0].toUpperCase()}</Avatar>                        
                        </>
                            :
                            <Avatar  >  {'A'}</Avatar>
                            
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <MiniNavbar/>
        </>
        
    );
}

export default Header;