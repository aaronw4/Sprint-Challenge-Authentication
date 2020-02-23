import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../components/axiosWithAuth';

function Jokes() {
    const [jokes, setJokes] = useState([]);
   
    useEffect(() => {
        const getJokes = () => {
            axiosWithAuth()
            .get('/')
            .then(res => {
                setJokes(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
        };
        getJokes()
    },[]);

    function logOut() {
        localStorage.removeItem('token');
        window.location='/'
    }

    return (
        <div>
            <button onClick={logOut} className='linkButton'>Log Out</button>
            <h1 className='title'>Dad Jokes</h1>
            <div className='jokesContainer'>
                {jokes.map(joke => (
                    <div key={joke.id} className='jokeContainer'>
                        <p>{joke.joke}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jokes