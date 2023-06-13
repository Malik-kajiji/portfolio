import React, { useState } from 'react';
import '../styles/SkillSet.scss';


const SkillSet = ({currentSection}) => {
    const [skills,setSkills]=useState([
        {imageSrc:'/logos/html-css-sass.png',name:'Html, Css & Sass',percentage:'95%'},
        {imageSrc:'/logos/Javascript.png',name:'Javascript',percentage:'85%'},
        {imageSrc:'/logos/Typescript.png',name:'Typescript',percentage:'75%'},
        {imageSrc:'/logos/react-redux.png',name:'React & Redux',percentage:'90%'},
        {imageSrc:'/logos/next.png',name:'Next.js',percentage:'80%'},
        {imageSrc:'/logos/node.png',name:'Node & Express',percentage:'60%'},
        {imageSrc:'/logos/mongo-firebase.png',name:'Mongo & Firebase',percentage:'65%'},
        {imageSrc:'/logos/figma.png',name:'Figma',percentage:'50%'}
    ])
    return ( 
        <section className={`skill-set-section ${currentSection === 'skill-set'? 'active' : ''}`}>
            <article className='container skills-container'>
                <div className={`skills ${currentSection === 'skill-set'? 'active' : ''}`}>
                    {skills.map((skill,index)=>(
                        <div className='skill' key={index} style={{'--d':`${index/4}s`}}>
                            <img src={skill.imageSrc} alt="" className='image'/>
                            <h2 className='TXT-heading3 skill-name'>{skill.name}</h2>
                            <p className='TXT-normal percentage'>{skill.percentage}</p>
                            <span className='progress'>
                                <span style={{'--p':`${skill.percentage}`,'--d':`${index/3}s`}}></span>
                            </span>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default SkillSet;