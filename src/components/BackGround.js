import React, { useEffect, useState } from 'react';
import MessageBox from './MessageBox';
import '../styles/BackGround.scss';


const BackGround = ({children,setCurrentSection}) => {
    const [sectionMessageBtn,setSectionMessageBtn]=useState('introdution-Btn');

    useEffect(()=>{
        const BackGround = document.querySelector('.animated-back-ground');
        let WinHeight = window.innerHeight;
        window.addEventListener('resize',()=>{
            WinHeight = window.innerHeight;
        })

        BackGround.addEventListener('wheel',(e)=>{
            e.preventDefault(); 
            const scrollPosition = Math.round(BackGround.scrollTop);
            if(scrollPosition === 0 || scrollPosition === WinHeight || scrollPosition === WinHeight*2 ){
                if(e.wheelDeltaY > 0){
                    BackGround.scrollTo(0,scrollPosition - WinHeight)
                } else if (e.wheelDeltaY < 0){
                    BackGround.scrollTo(0,scrollPosition + WinHeight)
                }
            } else if(scrollPosition === WinHeight*3) {
                if(e.wheelDeltaY > 0){
                    BackGround.scrollTo(0,scrollPosition - WinHeight)
                }
            }
        })
    },[])

    useEffect(()=>{
        // vars
        const BackGround = document.querySelector('.animated-back-ground');
        const labels = document.querySelectorAll('.lables span');
        const SectionBtns = document.querySelectorAll('.sections-btns button');
        let WinHeight = window.innerHeight;
        const BackGroundText = document.querySelector('.back-ground-text');
        window.addEventListener('resize',()=>{
            WinHeight = window.innerHeight;
        })

        // add click event to each button 
        SectionBtns.forEach((Btn,Index)=>{
            Btn.addEventListener('click',()=>BackGround.scrollTo(0,Index*WinHeight))
        })

        // function to controll section transition
        function SectionsController(num){
            labels.forEach((label)=>{
                label.classList.remove('current');
            })
            labels[num].classList.add('current');
            SectionBtns.forEach((Btn)=>{
                Btn.classList.remove('chosen-btn');
            })
            SectionBtns[num].classList.add('chosen-btn')
        }
        // adding scrolling event to background
        BackGround.addEventListener('scroll',()=>{
            const scrollPosition = Math.floor(BackGround.scrollTop);
            BackGroundText.classList.add('Hide');
            BackGroundText.classList.remove('text1');
            BackGroundText.classList.remove('text2');
            BackGroundText.classList.remove('text3');
            BackGroundText.classList.remove('text4');
            if(scrollPosition === 0 ){
                setTimeout(()=>{
                    BackGroundText.textContent='introduction';
                    BackGroundText.classList.add('text1');
                },250)
                setCurrentSection('introduction')
                setSectionMessageBtn('introdution-Btn')
                SectionsController(0)
            }else if(scrollPosition >= WinHeight-WinHeight/10 && scrollPosition <= WinHeight+WinHeight/10){
                setTimeout(()=>{
                    BackGroundText.textContent='projects';
                    BackGroundText.classList.add('text2');
                },250)
                setCurrentSection('projects')
                setSectionMessageBtn('projects-Btn');
                SectionsController(1)
            }else if(scrollPosition >= WinHeight*2-WinHeight/10 && scrollPosition <= WinHeight*2+WinHeight/10){
                setTimeout(()=>{
                    BackGroundText.textContent='skill Set';
                    BackGroundText.classList.add('text3');
                },250)
                setCurrentSection('skill-set')
                setSectionMessageBtn('skill-set-Btn');
                SectionsController(2)
            }else if(scrollPosition >= WinHeight*3-WinHeight/10 && scrollPosition <= WinHeight*3+WinHeight/10){
                setTimeout(()=>{
                    BackGroundText.textContent='contact';
                    BackGroundText.classList.add('text4');
                },250)
                setCurrentSection('contact')
                setSectionMessageBtn('contact-Btn');
                SectionsController(3)
            }
        })
    },[])

    return ( 
        <section className='animated-back-ground'>
        <div className='lables'>
            <span className={`TXT-normal current `} id='test'>introduction</span>
            <span className={`TXT-normal`}>projects</span>
            <span className={`TXT-normal`}>skill set</span>
            <span className={`TXT-normal`}>contact</span>
        </div>
        <div className='sections-btns'>
            <button className='introduction-btn chosen-btn'></button>
            <button className='projects-btn'></button>
            <button className='skill-set-btn'></button>
            <button className='contact-btn'></button>
        </div>
        <h1 className='back-ground-text text1'>
        introdution
        </h1>
        <MessageBox sectionMessageBtn={sectionMessageBtn}/>
        {children}
        </section>
    );
}

export default BackGround;