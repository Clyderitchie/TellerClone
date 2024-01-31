import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CLIENTNAME } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './homepage.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [getClientByFirstName, { error, loading, data }] = useLazyQuery(QUERY_CLIENTNAME)
    const clients = data?.getClientByFirstName || [];
    console.log(clients);
    useEffect(() => { }, [clients]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        getClientByFirstName({ variables: { firstName: searchQuery } })
    };

    return (
        <>
            <div id="welcomeSection" className="container mt-5 border">
                <div className="row">
                    <div className="col-12 mt-3 d-flex justify-content-center align-item-center">
                        <h1 className="fw-bolder">Hello (TellerName) to the Teller App</h1>
                    </div>
                </div>
            </div>
            <div id="customerSearch" className="container border">
                <div className="row">
                    <div className="col-12 mt-5 d-flex justify-content-start">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Client Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-secondary" type="submit" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Display the filtered clients */}
            <div id="searchResultCont" className="container mt-5 border">
                <h2 id="resultTitle" >Search Results</h2>
                    {clients && clients.map((client) => (
                <Link id="clientReturn" to={`/client/${client._id}`}>
                        <li key={client._id}>
                            Name: {client.firstName} {client.lastName}
                            <div id="clientInfoDropBtn" className="btn-group">
                                <button id="dropdownList" className="btn btn-secondary btn-sm dropdown-toggle vw-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Client Info
                                </button>
                                <ul className="dropdown-menu">
                                   <li>Address: {client.address}</li>
                                   <li>Phone Number: {client.phoneNumber}</li>
                                </ul>
                            </div>
                        </li>

                </Link>
                    ))}
            </div>
        </>
    );
};

export default Home;
