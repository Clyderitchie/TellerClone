import './depositScreen.css'

function Deposit () {
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
                            <p>Current Balance:</p>
                            <p>Available Balance:</p>
                            <p>Ledger Balance:</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="accountInfoData">
                            <p>Account Status:</p>
                            <p>Account Owners:</p>
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
                <div className="row">
                    <div className="col-12">
                        Deposit section
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit;