import './depositScreen.css'

function Deposit() {
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
                    <div id="depositCont" className="col-6">
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Deposit Amount</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Deposit Amount" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Currency</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Currency total" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Cash Out</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Cash Out" />
                        </div>
                        <div id="nextStepBtns" className="mb-3">
                            <button className="btn btn-secondary" type="submit">Finish Visit</button>
                            <button className="btn btn-secondary" type="submit">Next Tran.</button>
                            <button className="btn btn-secondary" type="submit">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit;