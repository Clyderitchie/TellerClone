import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CLIENTNAME } from '../../utils/queries';
import { Link } from 'react-router-dom';
import './homepage.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // const { loading, data } = useLazyQuery(QUERY_CLIENTNAME, {
    //     variables: { firstName: searchQuery },
    // });

    const [getClientByFirstName, { error, loading, data }] = useLazyQuery(QUERY_CLIENTNAME)

    const clients = data?.getClientByFirstName || [];
    console.log(clients);

    useEffect(() => {
        console.log(clients);
    }, [clients]);

    if (loading) {
        return <div>Loading...</div>;
    }

    // const filterClients = [clients].filter((client) =>
    //     client.firstName.includes(searchQuery)
    // );

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
            <div className="container mt-5">
                <h2>Search Results</h2>
                <ul>
                    {clients && clients.map((client) => (
                        <li key={client._id}>{client}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Home;
