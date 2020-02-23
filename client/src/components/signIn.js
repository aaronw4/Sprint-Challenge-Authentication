import React from 'react';
import axios from 'axios';

export class SignIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();

        axios
            .post('http://localhost:4000/api/auth/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/jokes');
            })
            .catch(err => console.log(err))
    }

    signUp() {
        window.location='/'
    }

    render() {
        console.log(this.state.credentials)
        return (
            <div>
                <button onClick={this.signUp} className='linkButton'>Register</button>
                <h1 className='title' id='logInTitle'>Log In</h1>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        placeholder='User Name'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        className='input'
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        className='input'
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}