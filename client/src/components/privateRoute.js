import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const privateRoute = ({component: Component, ...theRest}) => {
    return (
        <Route
            {...theRest}
            render = {() => {
                if (localStorage.getItem('token')) {
                    return <Component/>
                } else {
                    return <Redirect to='/signIn'/>
                }
            }}
        />
    )
}