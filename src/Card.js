import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div className="col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card">
                <img className="card-img-top" src={`${props.image}`} alt={`${props.image}`}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <div>
                        <a href={props.docs}><button className="btn btn-primary">Docs</button></a>
                        <a href={props.download}><button className="btn">Download</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;