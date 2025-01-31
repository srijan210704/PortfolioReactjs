import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import CPP from '../../assets/cpp.png'; 
import Python from '../../assets/py.png';
import DSA from '../../assets/dsa.png';
import ML from '../../assets/ml.png';

const Skills = () => {
  return (
    <section id='skills'>
        <h2 className="skillTitle">What I Do</h2>
        <p className="skillDesc">
          Welcome to my portfolio! I am a skilled and passionate web designer with expertise in creating visually appealing websites, proficient in web development, machine learning, data structures and algorithms, Python, and C++.
        </p>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UI/UX Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>UI/UX Design</h3>
                    <p>Crafting user-friendly and visually stunning interfaces.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Website Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Website Design</h3>
                    <p>Designing responsive and aesthetically pleasing websites.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={CPP} alt="C++" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>C++</h3>
                    <p>Developing high-performance applications using C++.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Python} alt="Python" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Python</h3>
                    <p>Writing efficient and scalable Python code.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={DSA} alt="Data Structures and Algorithms" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Data Structures and Algorithms</h3>
                    <p>Solving complex problems with optimized algorithms.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ML} alt="Machine Learning" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Machine Learning</h3>
                    <p>Building intelligent systems using machine learning.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
