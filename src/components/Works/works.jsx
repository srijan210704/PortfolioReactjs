import React from 'react';
import './works.css';
import Stock from '../../assets/stock.gif';
import Vending from '../../assets/vending.gif';
import Flight from '../../assets/flight.gif';
import Drum from '../../assets/drum.gif';
import Clock from '../../assets/portfolio-6.gif';
import Power from '../../assets/power.gif';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I'm excited to bring my skills and experience to help businesses achieve goals and create a strong online presence.</span>
        <div className="workImgs">
            <div className="workItem">
                <a href="https://github.com/srijan210704/Stock-Market-Predictor">
                    <img src={Stock} alt="Stock" className="worksImg" />
                    <p className="worksDescText">Stock Price Predictor</p>
                </a>
            </div>
            <div className="workItem">
                <a href="https://github.com/srijan210704/21CSC203P-APP-MiniProject">
                    <img src={Vending} alt="Vending" className="worksImg" />
                    <p className="worksDescText">Vending Machine</p>
                </a>
            </div>
            <div className="workItem">
                <a href="https://github.com/srijan210704/21CSC203P-APP-MiniProject">
                    <img src={Flight} alt="Flight" className="worksImg" />
                    <p className="worksDescText">Flight Reservation System</p>
                </a>
            </div>
            <div className="workItem">
                <a href="https://srijan210704.github.io/DRUM/">
                    <img src={Drum} alt="Drum" className="worksImg" />
                    <p className="worksDescText">Drum</p>
                </a>
            </div>
            <div className="workItem">
                <a href="https://srijan210704.github.io/Clock/">
                    <img src={Clock} alt="Clock" className="worksImg" />
                    <p className="worksDescText">Clock</p>
                </a>
            </div>
            <div className="workItem">
                <a href="https://github.com/srijan210704/Power-Consumption-and-Activity-Monitor">
                    <img src={Power} alt="Power" className="worksImg" />
                    <p className="worksDescText">Power Consumption and Activity Monitor</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Works;
