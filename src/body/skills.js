
import "../body/body.css";
import html_img from "../images/html_img.png";
import css_img from "../images/css_img.png";
import js_img from "../images/js_img.png";
import c_img from "../images/c_img.png";
import skills_img from "../images/skills_image.jpg";
import { Slide, Zoom, Fade } from 'react-awesome-reveal';

function Skills() {
    const skillset = [
        { id: 1, name: 'HTML5', imgsrc: html_img },
        { id: 2, name: 'CSS', imgsrc: css_img },
        { id: 3, name: 'Javascript', imgsrc: js_img },
        { id: 4, name: 'C', imgsrc: c_img }
    ];

    return (
        <div className='skills'>
            <Slide className='skills_image'>
                <img src={skills_img} style={{ maxWidth: "100%", height: "auto", marginRight: "5rem" }} alt="Skills" />
            </Slide>
            <div className='skills_text'>
                <div className="skills_list_container">
                    <Slide direction="left">
                        <div className="skill-item">
                            <img src={html_img} alt="HTML" />
                            <h5>HTML</h5>
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="skill-item">
                            <img src={css_img} alt="CSS" />
                            <h5>CSS</h5>
                        </div>
                    </Zoom>
                    <Fade direction="up">
                        <div className="skill-item">
                            <img src={js_img} alt="Javascript" />
                            <h5>Javascript</h5>
                        </div>
                    </Fade>
                    <Slide direction="right">
                        <div className="skill-item">
                            <img src={c_img} alt="C" />
                            <h5>C</h5>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
}

export default Skills;
