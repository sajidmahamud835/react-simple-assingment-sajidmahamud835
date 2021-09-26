import React from 'react';
import './Seller.css';

const Seller = (props) => {
    const { name, gender, company, phone, age, salary, picture } = props.seller
    return (
        <div className="col-3 card me-5">
            <div className="card-head">
            </div>
            <div className="card-body">
                <img src={picture} className="card-img" alt="..." />
                <h4 className="text-center">{name}</h4>
                <p className="bg-light p-2 rounded-pill"><strong>Salay:</strong> {salary}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Company:</strong> {company}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Gender</strong>: {gender}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Age:</strong> {age}</p>
                <p className="bg-light p-2 rounded-pill"><strong>Phone:</strong> {phone}</p>
                <button onClick={() => props.handelSelection(name, salary)} className="btn btn-primary ms-3 px-3"><i class="fas fa-user-plus"></i> Select Seller</button>
            </div>
        </div>
    );
};

export default Seller;