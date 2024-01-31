import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {  QUERY_CLIENT } from '../../utils/queries'


import './singleclient.css';

function ClientView() {
    const { clientId: _id } = useParams();

    const { loading, error, data } = useQuery( QUERY_CLIENT, {
        variables: { clientId: _id },
    });

    const client = data?.getClient || [];
    console.log(client);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="container mt-5 border">
                <div className="row">
                    <div id="personalCol" className="col-6">
                        <h1 id="clientName">Name: {client.firstName} {client.lastName}</h1>
                        <div id="personalInfo">
                            <h3>Personal Info</h3>
                            <div id="info">
                                <p>Address: {client.address}</p>
                                <p>Email: {client.email}</p>
                                <p>Phone Number: {client.phoneNumber}</p>
                                <p>SSN:</p>
                                <p>ID:</p>
                            </div>
                        </div>
                    </div>
                    <div id="accountCol" className="col-6">
                        <h1 id="clientAcccounts">Account Info</h1>
                        <div id="accountDrop" className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accounts
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Checking</a></li>
                                <li><a className="dropdown-item" href="#">Savings</a></li>
                                <li><a className="dropdown-item" href="#">Money Market</a></li>
                                <li><a className="dropdown-item" href="#">CD</a></li>
                            </ul>
                            <h3 id="account">(Account name and number here)</h3>
                        </div>
                        <div id="balance">
                            <p>Current Balance:</p>
                            <p>Available Balance:</p>
                            <p>Ledger Balance:</p>
                            <p>Date Opened:</p>
                            <p>YTD NSF:</p>
                            <p>Total NSF:</p>
                        </div>
                        <div id="deposit">
                            <Link to="/deposit">
                                <button className="btn btn-secondary" type="button">Deposit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ClientView;