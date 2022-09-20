import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron p-3">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <hr className="my-4" />
            <p>{props.subtext}</p>
            <p className="lead">
                <a className="btn btn-dark btn-lg" href={props.buttonURL} role="button">{props.buttonLabel}</a>
            </p>
        </div>
    )
};

export default Jumbotron;

