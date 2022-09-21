import React from 'react';


const Card = (props) => {
    return (
        <div class="col-sm-6 col-md-4 d-flex justify-content-center py-4 gx-md-0">
            <div class="card">
                <img className="card-img-top" src={props.img} alt="art" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.buttonURL} className="btn btn-dark">{props.buttonLabel}</a>
                </div>
            </div>
        </div>

    )
};

export default Card;