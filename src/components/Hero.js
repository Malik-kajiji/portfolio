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
                        <li><a href="/Malik Kajiji.pdf" target='_blank'><button className='resume BTN'>resume {BsDownload()}</button></a></li>
                    </ul>
                </nav>
            </header>
            <div className='backGround-image-container'>
                <div className='introduction-text container'>
                    <article className='content'>
                        <h2 className='name TXT-heading'>I'm malik kajiji</h2>
                        <p className='text TXT-normal'>
                        A proficient MERN stack developer with a specialization in front-end development, skilled at creating web applications that are both user-friendly and engaging.
                        </p>
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