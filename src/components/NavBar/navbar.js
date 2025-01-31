import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="DesktopMenu">
        <Link to="intro" spy={true} smooth={true} duration={500} offset={-70} className='desktopMenuListItem'>Home</Link>
        <Link to="about" spy={true} smooth={true} duration={500} offset={-50} className='desktopMenuListItem'>About</Link>
        <Link to="skills" spy={true} smooth={true} duration={500} offset={-50} className='desktopMenuListItem'>Skills</Link>
        <Link to="works" spy={true} smooth={true} duration={500} offset={-60} className='desktopMenuListItem'>Portfolio</Link>
      </div>
      <Link to="contact" smooth={true} duration={500} offset={-30} className="DesktopMenubtn">
        <img src={ContactImg} alt="" className="DesktopMenuicon" />Contact me
      </Link>
      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link to="intro" spy={true} smooth={true} duration={500} offset={-70} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link to="about" spy={true} smooth={true} duration={500} offset={-50} className='listItem'onClick={()=>setShowMenu(false)}>About</Link>
        <Link to="skills" spy={true} smooth={true} duration={500} offset={-50} className='listItem'onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link to="works" spy={true} smooth={true} duration={500} offset={-60} className='listItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} offset={-60} className='listItem'onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
