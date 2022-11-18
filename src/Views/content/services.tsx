// contact.tsx
// Roman Lysenko - Assignment2 Mini Portfolio in React
// contact page with a form
import React, { useEffect } from 'react';

function Home()
{
    useEffect(() =>{
        document.title = "Services";
    },[]);
    
    return(
        <div className="container">
        <h1>My Services</h1>
        <hr></hr>
        <br></br>
        <h2>My services include: </h2>
        <ul>
            <li>
                <p>Web-development</p>
            </li>
            <li>
                <p>UI/UX Design</p>
            </li>
            <li>
                <p>Web-programing</p>
            </li>
            <li>
                <p>Website maintanace</p>
            </li>
            <li>
                <p>SEO specialist</p>
            </li>
            <li>
                <p>Project Manager</p>
            </li>
        </ul>
    </div>
    );
}

export default Home;