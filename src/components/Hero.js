import React from 'react';
import '../styles/Hero.scss';
import {BsDownload} from 'react-icons/bs'


const Hero = ({currentSection}) => {
    return ( 
        <section className={`hero-section ${currentSection === 'introduction'?'active':''}`}>
            <header className='main-header'>
                <nav className='main-nav container'>
                    <ul role="list">
                        <li><a href=""><img src="/logos/logo.png" alt="" className='logo' /></a></li>
                        <li><button className='resume BTN'>resume {BsDownload()}</button></li>
                    </ul>
                </nav>
            </header>
            <div className='backGround-image-container'>
                <div className='introduction-text container'>
                    <article className='content'>
                        <h2 className='name TXT-heading'>I'm malik kajiji</h2>
                        <p className='text TXT-normal'>A professional frontend web developer & designer skilled at building user friendly and interactive websites.</p>
                    </article>
                </div>
                <div className='blur-layer-img'></div>
                <div className='blur-layer'></div>
                <div className='backGround-image'>
                    <div className='over-layer'></div>
                </div>
                <div className='circle TXT-heading'>
                    introduction
                </div>
            </div>
        </section>
    );
}

export default Hero;