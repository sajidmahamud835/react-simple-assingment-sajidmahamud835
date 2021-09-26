import React from 'react';
import './Table.css';
const Table = (props) => {
    const { selections, costs } = props
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><h4>Player Added: {selections.length}</h4></th>
                    </tr>
                    <tr>
                        <th scope="col"><h4>Total Cost: {costs}$</h4></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /* <tr>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                        </tr>
                        <tr>
                            <td>@twitter</td>
                        </tr> */
                        selections.map(selection =>
                            <tr>
                                <td>{selection}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;