import React from 'react';
import "../body/body.css";
import intro_img from "../images/intro_img.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Skills from './skills';
import { Slide } from "react-awesome-reveal";
import Projects from "./projects.js";

export default function Body() {
  return (
    <div style={{padding:"0 2rem"}}>
        <div className='intro_section' id='intro_section'>
            <h2>About</h2>
            <div className="container intro">
                <Slide className='intro_img'>
                    <img
                        src={intro_img}
                        alt="Profile"
                        className='intro-image'
                    ></img>
                </Slide>
                <Slide direction='right' className='intro_text'>
                    <div className='intro-text'>
                        <h6>I am a Third year undergrad at Jk Lakshmipat University Jaipur. I am interested in Front End Web Development.</h6>
                    </div>
                </Slide>
            </div>
            <hr />
        </div>

        <div className='education_section' id='education_section'>
        <h2>Education</h2>
        <VerticalTimeline lineColor='grey'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#A8A8A8', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  grey' }}
                iconStyle={{ background: 'green', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Computer application</h3>
                <h4 className="vertical-timeline-element-subtitle">Jk Lakshmipat University Jaipur</h4>
                <h6>
                I am currently a second year undergraduate pursuing Bachlor of Computer application. <br />
                CGPA : 7+
                Duration : 2022-2025 
                </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'green', color: '#fff' }}
                contentStyle={{ background: '#A8A8A8', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  grey' }}
            >
                <h3 className="vertical-timeline-element-title">Intermediate</h3>
                <h4 className="vertical-timeline-element-subtitle">Kendriya Vidhayala no.5 School</h4>
                <p>
                Stream : Commerce with AppliedMaths <br />
                Percentage : 85%
                Duration : 2021-2022
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'green', color: '#fff' }}
                contentStyle={{ background: '#A8A8A8', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  grey' }}
            >
                <h3 className="vertical-timeline-element-title">High School</h3>
                <h4 className="vertical-timeline-element-subtitle">Ryan International School</h4>
                <p>
                    Percentage : 75%
                    Duration : 2019-2020
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <hr />
        </div>

        <div className='skills_section' id='skills_section'>
            <h2>Skills</h2>
            <Skills />
            <hr />
        </div>

        <div className='projects_section' id='projects_section'>
             <Projects />
        </div>

    </div>
  )
}
