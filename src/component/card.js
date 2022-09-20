import React from 'react';


const Card = (props) => {
    return (
        <div className="card mx-2">
            <img className="card-img-top" src={props.img} alt="art"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.buttonURL} className="btn btn-dark">{props.buttonLabel}</a>
                </div>
        </div>
    )
};

export default Card;