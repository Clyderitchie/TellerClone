import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {  QUERY_CLIENT } from '../../utils/queries'

import './depositScreen.css'

function Deposit() {
    const { clientId: _id } = useParams();

    const { loading, error, data } = useQuery( QUERY_CLIENT, {
        variables: { clientId: _id }
    })

    const client = data?.getClient || [];
    console.log(client);

    if(loading) {
        return <div>Loading....</div>
    }


    return (
        <>
            <div className="container mt-5 border">
                <div className="row">
                    <div id="accountInfo" className="col-12">
                        <h1 id="accountInfoTitle">Account Info</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="accountInfoData">
                            {client.accounts.map((account) => (
                                <p key={account._id}>Current Balance: {account.balance}</p>
                            ))}
                            <p>Available Balance:</p>
                            <p>Ledger Balance:</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="accountInfoData">
                            <p>Account Status:</p>
                            <p>Account Owners: {client.firstName} {client.lastName}</p>
                            <p>Date Opened:</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="accountInfoData">
                            <p>Holds:</p>
                            <p>Return Items:</p>
                            <p>Notes:</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3 border">
                <div id="depositDisplay" className="row">
                    <div id="depositCont" className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Deposit Amount</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Deposit Amount" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Currency</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Currency total" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Check Total</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Cash Out" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cash Out</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Cash Out" />
                        </div>
                        <div id="nextStepBtns" className="mb-3">
                            <Link to="/">
                                <button className="btn btn-secondary" type="submit">Finish Visit</button>
                            </Link>
                            <Link to="/client">
                                <button className="btn btn-secondary" type="submit">Next Tran.</button>
                            </Link>
                            <Link to="/client">
                                <button className="btn btn-secondary" type="submit">Cancel</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit;