import { Link } from 'react-router-dom';
import './singleclient.css';

function ClientView() {


    return (
        <>
            <div className="container mt-5 border">
                <div className="row">
                    <div id="personalCol" className="col-6">
                        <h1 id="clientName">Name: (Client name here)</h1>
                        <div id="personalInfo">
                            <h3>Personal Info</h3>
                            <div id="info">
                                <p>Address:</p>
                                <p>Email:</p>
                                <p>Phone Number:</p>
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