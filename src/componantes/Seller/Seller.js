import React from 'react';
import './Seller.css';

const Seller = (props) => {
    const { name, gender, company, phone, age, balance, picture } = props.seller
    return (
        <div className="col-3 card me-5">
            <div className="card-head">
            </div>
            <div className="card-body">
                <img src={picture} className="card-img" alt="..." />
                <h4 className="text-center">{name}</h4>
                <p className="bg-light p-2 rounded-pill"><strong>Salay:</strong> {balance}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Company:</strong> {company}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Gender</strong>: {gender}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Age:</strong> {age}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Phone:</strong> {phone}</p>
            </div>
        </div>
    );
};

export default Seller;