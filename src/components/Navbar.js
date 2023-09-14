import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomContext from '../Context/ContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomAuth } from '../Context/LoginContext';
function Header() {

    const { setNavbarClicked } = useContext(CustomContext);
    const { navbarClicked } = useContext(CustomContext);

    const [selected,setSelected]=useState("home")
    const {user,logout}=useContext(CustomAuth);
    useEffect(()=>{
        console.log("user",user)
    },[user])
    return (
        <Navbar  style={{ position: 'absolute',left:'0',right:'0',top:'0' ,width: '100vw', height: '5rem', zIndex: '20' }} expand="lg" className="navbar ScreenNavbar bg-body-tertiary ">
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'black', fontWeight: 'bolder' }}>InterviewCrusher </Navbar.Brand>
                <Navbar.Toggle onClick={() => { setNavbarClicked(!navbarClicked) }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav style={{position:'relative',marginLeft:'auto'}} className="me-auto">
                        <Link className={selected ? "" : "Navlink"} style={{textDecoration:'none' ,position: 'relative', fontWeight:'400',marginLeft: '2rem', fontSize: '1.6rem',color:selected==="home" ? "#1CABFC" : "black" }} onClick={()=>setSelected("home")} to="/" >Home</Link>
                        <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "profile" ? "#1CABFC" : "black" }} onClick={() => setSelected("profile")} href="#home">Profile</Link>
                        <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "explore" ? "#1CABFC" : "black" }} onClick={() => setSelected("explore")} href="#link">Explore</Link>
                        {user === null ? 
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "signin" ? "#1CABFC" : "black" }} onClick={() => setSelected("signin")} to="/login">Sign In</Link>
                            :
                            <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "signin" ? "#1CABFC" : "black" }} onClick={() => logout()} to="#">Sign out</Link>    
                        }
                        <Link className={selected ? "" : "Navlink"} style={{ textDecoration: 'none', position: 'relative', fontWeight: '400', marginLeft: '2rem', fontSize: '1.6rem', color: selected === "topusers" ? "#1CABFC" : "black" }} onClick={() => setSelected("topusers")} to="#link">Top Users</Link>
                        {user!== null ? <p>{user?.name}</p> : ""}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;