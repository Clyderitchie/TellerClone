import { useQuery } from '@apollo/client';
import { QUERY_CLIENT, QUERY_TELLER } from '../../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_CLIENT, QUERY_TELLER);
    const teller = data?.getAllTellers || [];

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>Hello</h1>
        
        </>
    )
}

export default Home;