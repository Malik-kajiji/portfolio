import React from 'react';
import '../styles/Contact.scss';


const Contact = ({currentSection}) => {
    function handleCopy(){
        const copyMsg = document.querySelector('.copy');
        navigator.clipboard.writeText("contact@malikkajiji.online");
        copyMsg.innerHTML = "copied";
        setTimeout(() => {
            copyMsg.innerHTML = "copy";
        }, 3000);
    }
    return ( 
        <section className={`contact-section ${currentSection === 'contact'?'active':''}`}>
            <article className='accounts'>
                <a href="https://www.linkedin.com/in/malik-kajiji-50b029257/" target='_blank' className='linkedin'>
                    <img src="/logos/linkedin.png" alt="" className='image'/>
                </a>
                <a href="https://www.fiverr.com/share/BopA3l" target='_blank' className='Fiverr'>
                    <img src="/logos/Fiverr.png" alt="" className='image'/>
                </a>
                <p className='email TXT-heading2' onClick={handleCopy}>contact@malikkajiji.online</p>
                <p className='copy TXT-normal'> copy </p>
            </article>
            <footer className='waves'>
                <div className='wave1'></div>
                <div className='wave2'></div>
                <div className='wave3'></div>
                <div className='wave4'></div>
            </footer>
        </section>
    );
}

export default Contact;