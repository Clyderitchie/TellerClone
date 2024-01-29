import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CLIENT, QUERY_TELLER } from '../../utils/queries';

import './homepage.css'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { loading, data } = useQuery(QUERY_CLIENT, {
        variables: { clientId: searchQuery},
    });

    const client = data?.getAllClients || [];
    const filterClients = client.filter((client) =>
        client.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        
        console.log(filterClients);
    }


    if (loading) {
        return <div>Loading...</div>
    }

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
                            {/* <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Search</button> */}
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Name</a></li>
                                <li><a className="dropdown-item" href="#">Account</a></li>
                                <li><a className="dropdown-item" href="#">Phone Number</a></li>
                                <li><a className="dropdown-item" href="#">DC</a></li>
                            </ul>
                            <input type="text" className="form-control" placeholder="Client Search" aria-label="Text input with dropdown button" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                            <button className="btn btn-outline-secondary" type="submit" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display the filtered clients */}
            <div className="container mt-5">
                <h2>Search Results</h2>
                {filterClients.length > 0 ? (
                    <ul>
                        {filterClients.map((client) => (
                            <li key={client._id}>{client.firstName}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No clients found.</p>
                )}
            </div>

        </>
    )
}

export default Home;