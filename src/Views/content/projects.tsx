// projects.tsx
// Roman Lysenko - Assignment2 Mini Portfolio in React
// Projects page content
import React, { useEffect } from 'react';
import Club from '../../Assets/club66.png';
import Minco from '../../Assets/minco.png';
import Superebikes from '../../Assets/superebikes.png';

function Projects()
{
    useEffect(() =>{
        document.title = "Projects";
    },[]);
    
    return(
        <div className="container-fluid">
        <h1>My Projects</h1>
        <hr></hr>
        <br></br>
        <div className="row custom__row">
            <div className="col-xl-4">
                <section className="project1">
                    <img className="custom__image img " src={Club} alt="Project screenshot"/>
                    <p id="first-p">This project is a collaboration on a custom website for my friend, it is a clothing brand for custom clothing</p>
                </section>
            </div>
            <div className="col-xl-4">
                <section className="project2">
                    <img className="custom__image img " src={Minco} alt="Project screenshot"/>
                    <p id="second-p">This project is from my work term, it is a post for a fresh website that are about to launch</p>
                </section>
            </div>
            <div className="col-xl-4">
                <section className="project3">
                    <img className="custom__image img " src={Superebikes} alt="Project screenshot"/>
                    <p id="third-p">This project is a collaboration on a custom website for my coworker, it is a website for an e-bikes company.</p>
                </section>
            </div>
        </div>
    </div>
    );
}

export default Projects;