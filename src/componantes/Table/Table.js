import React from 'react';
import './Table.css';
const Table = () => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><h4>Player Added: 0</h4></th>
                    </tr>
                    <tr>
                        <th scope="col"><h4>Total Cost: 0</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;