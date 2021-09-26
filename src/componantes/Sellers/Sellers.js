import React, { useEffect, useState } from 'react';
import Seller from '../Seller/Seller';
import Table from '../Table/Table';
import './Sellers.css';

const Sellers = () => {
    //use state
    const [sellers, setSellers] = useState([]);
    //use effect
    useEffect(() =>
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setSellers(data))
        , []);
    return (
        <div className="row">
            <section className="col-9 mt-5">
                <div className="row g-5">
                    {
                        sellers.map(seller => <Seller
                            key={seller.key}
                            seller={seller}
                        ></Seller>
                        )
                    }
                </div>
            </section>
            <section className="col-3 mt-5">
                <Table></Table>
            </section>
        </div>
    );
};

export default Sellers;