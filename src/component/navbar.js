import React from 'react';

const Navbar = (props) => {

    return (
        <div class="col-12 bg-primary g-0 ">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 ">
                <div class="container-fluid">
                    <a className="nav1 navbar-brand pl-2" href={props.who}>{props.name}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
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
                </div>
            </nav>
        </div>
    )
};

export default Navbar;




/*
<div class="col-12 bg-primary g-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            a className="navbar-brand" href={props.who}>{props.name}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
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
</div>
                    </nav >
                </div >


<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className='container fluid'>
                <a className="navbar-brand" href={props.who}>{props.name}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
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
            </div>

        </nav>
* /




/*
<div class="col-12 bg-primary g-0">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
*/
