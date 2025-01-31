import React from 'react';
import './intro.css';
import bg from "../../assets/image.png"
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Srijan Srivastava</span><br/>Web Devoloper</span>
            <p className="introPara">I'm a skilled web designer with experience  in creating<br/> visually applealing and user friendly websites</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire Me</button></Link>

        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro