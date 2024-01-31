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
                            <h3 id="personalInfoTitle">Personal Info</h3>
                            <div id="info">
                                <p className='personalData'>Address: {client.address}</p>
                                <p className='personalData'>Email: {client.email}</p>
                                <p className='personalData'>Phone Number: {client.phoneNumber}</p>
                                <p className='personalData'>SSN:</p>
                                <p className='personalData'>ID:</p>
                            </div>
                        </div>
                    </div>
                    <div id="accountCol" className="col-6">
                        <h1 id="clientAcccounts">Account Info:</h1>
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
                            <h3 id="account">{client.accounts.map((account) => (
                            <p key={account._id}>{account.accountType}</p>
                        ))}</h3>
                        </div>
                        <div id="balance">{client.accounts.map((account) => (
                            <p className="accountBalance" key={account._id}>Current Balance: {account.balance}</p>
                        ))}
                            <p className="accountBalance">Available Balance:</p>
                            <p className="accountBalance">Ledger Balance:</p>
                            <p className="accountBalance">Date Opened:</p>
                            <p className="accountBalance">YTD NSF:</p>
                            <p className="accountBalance">Total NSF:</p>
                        </div>
                        <div id="deposit">
                            <Link to={`/deposit/${client._id}`}>
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