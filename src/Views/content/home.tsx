import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home()
{
    useEffect(() =>{
        document.title = "Home";
    },[]);

    return(
        <div className="container">
            <h1>Welcome to my mini-portfolio site!</h1>
            <hr/>
            <Link to = {"/about"}>
                <button className='btn btn-primary btn-large'>Check the About!</button>
            </Link>
        </div>
    );
}

export default Home;