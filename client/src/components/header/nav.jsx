import { Link } from 'react-router-dom';
import Navbar from './navbar';

function Nav() {

    return (
        <Navbar
            links={[
                <Link key={1} className="dropdown-item text-dark" to='/'>
                    Home
                </Link>,
                <Link key={2} className="dropdown-item text-dark" to='/files'>
                    File
                </Link>,
                <Link key={3} className="dropdown-item text-dark" to='/edits'>
                    Edit
                </Link>,
                <Link key={4} className="dropdown-item text-dark" to='/settings'>
                    Setting
                </Link>,
                <Link key={5} className="dropdown-item text-dark" to='/help'>
                    FAQ
                </Link>,
            ]}
        />
    )
};

export default Nav;