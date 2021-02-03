import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="card">
                <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <button className="btn btn-primary">Docs</button>
                        <button className="btn">Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;