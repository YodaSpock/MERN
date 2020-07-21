import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component{
    render() {
        return (
            <nav>
                <Link to="/">ExerciseTracker</Link>
                <ul>
                    <li>
                        <Link to="/">Exercises</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Exercise</Link>
                    </li>
                    <li>
                        <Link to="/user">Create User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}