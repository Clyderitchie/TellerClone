import './singleclient.css';

function ClientView() {


    return (
        <>
            <h1>SingleClient</h1>

            <div className="container mt-5 border">
                <div className="row">
                    <div id="personalCol" className="col-6">
                        <h2 id="clientName">Name: (Client name here)</h2>
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
                        <h2>Account Info</h2>
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
                        </div>
                        <div id="accountInfo">
                            <h4>Available Balance:</h4>
                            <h4>Current Balance:</h4>
                            <h4>Date Opened:</h4>
                            <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account Details
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Owners: </a></li>
                                <li><a className="dropdown-item" href="#">Total NSF:</a></li>
                                <li><a className="dropdown-item" href="#">YTD NSF:</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ClientView;