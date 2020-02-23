import React from 'react';
import axios from 'axios';

export class SignUp extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    register = e => {
        e.preventDefault();

        axios
            .post('http://localhost:4000/api/auth/register', {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                setTimeout(() => {window.location='/signIn'}, 1000)
            })
            .catch(err => console.log(err));
    }

    signIn() {
        window.location='/signIn'
    }

    render() {
        return (
            <div>
                <button onClick={this.signIn} className='linkButton'>Sign In</button>
                <h1 className='title' id='registerTitle'>Register</h1>
                <p className='directions'>Select a user name and password.</p>
                <form onSubmit={this.register}>
                    <input
                        type='text'
                        name='username'
                        placeholder='User Name'
                        value={this.state.username}
                        onChange={this.handleChange}
                        className='input'
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        className='input'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}