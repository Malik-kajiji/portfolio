import React, { useState } from 'react';
import '../styles/SkillSet.scss';


const SkillSet = ({currentSection}) => {
    const [skills,setSkills]=useState([
        {imageSrc:'/logos/HTML.png',name:'HTML5',percentage:'90%'},
        {imageSrc:'/logos/CSS.png',name:'CSS3',percentage:'80%'},
        {imageSrc:'/logos/SASS.png',name:'SASS',percentage:'80%'},
        {imageSrc:'/logos/Javascript.png',name:'JAVASCRIPT',percentage:'85%'},
        {imageSrc:'/logos/React.png',name:'REACT JS',percentage:'80%'},
        {imageSrc:'/logos/next.png',name:'NEXT JS',percentage:'70%'},
        {imageSrc:'/logos/figma.png',name:'FIGMA',percentage:'50%'}
    ])
    return ( 
        <section className={`skill-set-section ${currentSection === 'skill-set'? 'active' : ''}`}>
            <article className='container skills-container'>
                <div className={`skills ${currentSection === 'skill-set'? 'active' : ''}`}>
                    {skills.map((skill,index)=>(
                        <div className='skill' key={index} style={{'--d':`${index/4}s`}}>
                            <img src={skill.imageSrc} alt="" className='image'/>
                            <h2 className='TXT-heading2 skill-name'>{skill.name}</h2>
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