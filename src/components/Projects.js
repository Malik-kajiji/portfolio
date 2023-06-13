import React, { useEffect, useState } from 'react';
import '../styles/Projects.scss';
import {MdOutlineOpenInNew} from 'react-icons/md';
import {FiGithub} from 'react-icons/fi';


const Projects = ({currentSection}) => {
    const [chosenCard,setChosenCard]=useState('1');
    const [containerRotation,setContainerRotation] = useState('0deg')
    function setRotation(num){
        setChosenCard(num)
        if(num === '1'){
            setContainerRotation('0deg');
        }else if(num === '2'){
            setContainerRotation('-90deg');
        }else if(num === '3'){
            setContainerRotation('-180deg');
        }else if(num === '4'){
            setContainerRotation('-270deg');
        }
    }
    return ( 
        <section className={`projects-section ${currentSection === 'projects'?'active':''}`}>
            <article className='projects-container' 
                    style={{transform: `rotate(${containerRotation})`}}>
                <div className='card first-card'>
                <img src="/projects/crypto-tracker.png" alt="" />
                <div className='image-overlay'></div>
                    <h2 className='project-name TXT-heading2'>crypto tracker</h2>
                    <div className='details'>
                        <h2 className='TXT-normal description'>
                            about the project :
                        </h2>
                        <p className='TXT-footer description'>
                            a crypto app that shows you all needed info such as currencies, exchanges, with ability to create accounts and add coins to watch list.
                        </p>
                        <h2 className='TXT-normal'>
                            used technologies :
                        </h2>
                        <ul className='TXT-footer'>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Typescript</li>
                            <li>Firebase</li>
                        </ul>
                        <div className='Btns'>
                            <a href="https://github.com/Malik-kajiji/crypto-tracker" rel="noreferrer" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="https://crypto-tracker.online" rel="noreferrer" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
                <div className='card second-card'>
                    <img src="/projects/weather-app.png" alt="" />
                    <div className='image-overlay'></div>
                    <h2 className='project-name TXT-heading2'>weather app</h2>
                    <div className='details'>
                        <h2 className='TXT-normal description'>
                            about the project :
                        </h2>
                        <p className='TXT-footer description'>
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
                            <a href="https://github.com/Malik-kajiji/weather-app" rel="noreferrer" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="http://weather-app.online" rel="noreferrer" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
                <div className='card third-card'>
                    <img src="/projects/questions-game.png" alt="" />
                    <div className='image-overlay'></div>
                    <h2 className='project-name TXT-heading2'>questions game</h2>
                    <div className='details'>
                        <h2 className='TXT-normal description'>
                            about the project :
                        </h2>
                        <p className='TXT-footer description'>
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
                            <a href="https://github.com/Malik-kajiji/random-question-game" rel="noreferrer" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="https://random-question-game.online" rel="noreferrer" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
                <div className='card forth-card'>
                <img src="/projects/ecommerce.png" alt="" className='image'/>
                <div className='image-overlay'></div>
                    <h2 className='project-name TXT-heading2'>e-commerce site</h2>
                    <div className='details'>
                        <h2 className='TXT-normal description'>
                            about the project :
                        </h2>
                        <p className='TXT-footer description'>
                            A fully working full stack e-commerce store, with ability to pay and create a real accounts.
                        </p>
                        <h2 className='TXT-normal'>
                            used technologies :
                        </h2>
                        <ul className='TXT-footer'>
                            <li>React JS</li>
                            <li>Next JS</li>
                            <li>Sanity</li>
                            <li>Stripe</li>
                            <li>Firebase</li>
                        </ul>
                        <div className='Btns'>
                            <a href="https://github.com/Malik-kajiji/e-commerce-store" rel="noreferrer" target='_blank'><button className='BTN'>{FiGithub()}</button></a>
                            <a href="https://e-commerce-store-msj1.vercel.app" rel="noreferrer" target='_blank'><button className='BTN'>{MdOutlineOpenInNew()}</button></a>
                        </div>
                    </div>
                </div>
            </article>
            <ul role='list' className='bullets'>
                <li onClick={()=>setRotation('1')} className={chosenCard === '1'?'chosen' :''}></li>
                <li onClick={()=>setRotation('2')} className={chosenCard === '2'?'chosen' :''}></li>
                <li onClick={()=>setRotation('3')} className={chosenCard === '3'?'chosen' :''}></li>
                <li onClick={()=>setRotation('4')} className={chosenCard === '4'?'chosen' :''}></li>
            </ul>
        </section>
    );
}

export default Projects;