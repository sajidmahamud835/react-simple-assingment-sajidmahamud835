import React, { useEffect, useState } from 'react';
import Seller from '../Seller/Seller';
import Table from '../Table/Table';
import './Sellers.css';

const Sellers = () => {

    //function
    const handelSelection = (seller, salary) => {
        const newSelection = [...selected, seller];
        setSelected(newSelection);
        setCosts(costs + salary);
    }
    //use state
    const [sellers, setSellers] = useState([]);
    const [selected, setSelected] = useState([]);
    const [costs, setCosts] = useState(0);
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
                            handelSelection={handelSelection}
                        ></Seller>
                        )
                    }
                </div>
            </section>
            <section className="col-3 mt-5">
                <Table selections={selected} costs={costs}></Table>
            </section>
        </div>
    );
};

export default Sellers;