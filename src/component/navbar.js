import React from 'react';

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <a className="navbar-brand" href={props.who}>{props.name}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href={props.who}>Who <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.are}>Are</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.you}>You?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={props.tell}>Tell me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;

