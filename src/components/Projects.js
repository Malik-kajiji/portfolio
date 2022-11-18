import React, { useState } from 'react';
import '../styles/Projects.scss';
import {MdOutlineOpenInNew} from 'react-icons/md';
import {FiGithub} from 'react-icons/fi';


const Projects = ({currentSection}) => {
    const [chosenCard,setChosenCard]=useState('1');
    let containerRotation ='0deg';
    if(chosenCard === '1'){
        containerRotation = '0deg'
    }else if(chosenCard === '2'){
        containerRotation = '-90deg'
    }else if(chosenCard === '3'){
        containerRotation = '-180deg'
    }else if(chosenCard === '4'){
        containerRotation = '-270deg'
    }
    return ( 
        <section className={`projects-section ${currentSection === 'projects'?'active':''}`}>
            <article className='projects-container' 
                    style={{transform: `rotate(${containerRotation})`}}>
                <div className='card first-card'>
                    <img src="/projects/ecommerce.png" alt="" className='image'/>
                    <h2 className='project-name TXT-heading2'>e-commerce site</h2>
                    <div className='details'>
                        <h2 className='TXT-normal'>
                            about the project :
                        </h2>
                        <p className='TXT-footer'>
                            A fully working full stack e-commerce store, with ability to pay and create a demo accounts.
                        </p>
                        <h2 className='TXT-normal'>
                            used technologies :
                        </h2>
                        <ul className='TXT-footer'>
                            <li>React JS</li>
                            <li>Next JS</li>
                            <li>Sanity</li>
                            <li>Stripe</li>
                            <li>Sass</li>
                        </ul>
                        <div className='Btns'>
                            <a href="https://github.com/Malik-kajiji/e-commerce-store" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="https://e-commerce-store-msj1.vercel.app" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
                <div className='card second-card'>
                    <img src="/projects/weather-app.png" alt="" />
                    <h2 className='project-name TXT-heading2'>weather app</h2>
                    <div className='details'>
                        <h2 className='TXT-normal'>
                            about the project :
                        </h2>
                        <p className='TXT-footer'>
                            a weather app that shows temperature, wind speed, coordinates and other details, with ability to switch between light and dark mode.
                        </p>
                        <h2 className='TXT-normal'>
                            used technologies :
                        </h2>
                        <ul className='TXT-footer'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className='Btns'>
                            <a href="https://github.com/Malik-kajiji/weather-app" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="http://weather-app.online" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
                <div className='card third-card'>
                    <img src="/projects/speed-writing-game.png" alt="" />
                    <h2 className='project-name TXT-heading2'>speed writing game</h2>
                    <div className='details'>
                        <h2 className='TXT-normal'>
                            about the project :
                        </h2>
                        <p className='TXT-footer'>
                            a game that tests your writing speed, with ability to set the difficulty and some cool sounds.
                        </p>
                        <h2 className='TXT-normal'>
                            used technologies :
                        </h2>
                        <ul className='TXT-footer'>
                            <li>Html</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className='Btns'>
                            <a href="https://github.com/Malik-kajiji/simple-game" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="http://speed-writing-test.online" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
                <div className='card forth-card'>
                    <img src="/projects/questions-game.png" alt="" />
                    <h2 className='project-name TXT-heading2'>questions game</h2>
                    <div className='details'>
                        <h2 className='TXT-normal'>
                            about the project :
                        </h2>
                        <p className='TXT-footer'>
                            A simple random question game that can keep track of your best score and timing with ability to control the quantity of the questions.
                        </p>
                        <h2 className='TXT-normal'>
                            used technologies :
                        </h2>
                        <ul className='TXT-footer'>
                            <li>Html</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                        </ul>
                        <div className='Btns'>
                            <a href="https://github.com/Malik-kajiji/random-question-game" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="https://random-question-game.online" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
            </article>
            <ul role='list' className='bullets'>
                <li onClick={()=>setChosenCard('1')} className={chosenCard === '1'?'chosen' :''}></li>
                <li onClick={()=>setChosenCard('2')} className={chosenCard === '2'?'chosen' :''}></li>
                <li onClick={()=>setChosenCard('3')} className={chosenCard === '3'?'chosen' :''}></li>
                <li onClick={()=>setChosenCard('4')} className={chosenCard === '4'?'chosen' :''}></li>
            </ul>
        </section>
    );
}

export default Projects;