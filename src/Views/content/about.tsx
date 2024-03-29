// about.tsx
// Roman Lysenko - Assignment2 Mini Portfolio in React
// About page content
import React, { useEffect } from 'react';
import Author from '../../Assets/AuthorPhoto.jpeg';

function About()
{
    useEffect(() =>{
        document.title = "About";
    },[]);

    return(
        <div className="container">
        <h1>About Me</h1>
        <hr></hr>
        <br></br>
        <section className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img className="custom__image float-end" src={Author} alt="a photo of the author"/>
                </div>
                <div className="col-lg-6 about-page">
                    <h4>Hello,<br></br><br></br> my name is Roman Lysenko, I am an international student from Ukraine, currently learning User Interface Design in the IMDW program from Georgian College.<br></br>
                    <br></br> I'm in my second year at the moment of making this project, which is the last year of my program.<br></br><br></br> I hope that by doing this project I am able to improve my knowledge and understanding of JavaScript.<br></br><br></br> I am still young and do not have a lot of experience when it comes to projects but I have collaborated on some in the past</h4>
                </div>
            </div>
        </section>
    </div>
    );
}

export default About;