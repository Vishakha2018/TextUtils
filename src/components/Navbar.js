import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* link is used for faster the app and load faster while anchor tag make reloads */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${ props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
                    </div>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2 " type="search"  placeholder="Search" aria-label="Search" />
                        btn-outlined-success for green outlined button
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>

    );
}



// so the type of value of props will be defined and if we add isRequired then value should be passed while calling component
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// we can pass default values of props so while calling if we don't add any value then this will work
Navbar.defaultProps = {
    title: 'TextUtils'
}

