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
    })

    return (
        <div>
            <h1>Dad Jokes</h1>
            <div>
                {jokes.map(joke => (
                    <div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jokes