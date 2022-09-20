import React from 'react';

const Footer = (props) => {

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    return (
        <div className="card text-center w-100 mt-5">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Thanks for visiting!</h5>
                <p className="card-text">"Despite our greatests efforts, the world kept it's beauty..."</p>
                <button className="btn btn-dark" onClick={topFunction}>Back to top</button>
            </div>
            <div className="card-footer text-muted">
            © 2022 Mau Luz develoment. All rights reserved

            </div>
        </div>
    )
}

export default Footer;