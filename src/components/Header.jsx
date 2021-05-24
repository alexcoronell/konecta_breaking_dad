import React from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Logo from './../assets/images/logo.png';

import useUser from './../hooks/useUser';

const Header = () => {

    const { isLogged, logout } = useUser()

    return (
        <header className="header text-center py-2">
                <div className="container">
                    <div className="row">
                        <picture className="header__picture text-center col-3 d-flex justify-content-center justify-content-md-start align-items-center">
                            <img className="img-fluid" src={Logo} alt={Logo} />
                        </picture>
                        <nav className="header__menu col-9 d-flex justify-content-end align-items-center">
                            {
                                isLogged
                                    ?   <Button onClick={logout} color="primary">Logout</Button>
                                    :   <Link to={`/login`} className="card-link">
                                            <Button color="primary">Login</Button>
                                        </Link>
                            }   
                        </nav>
                    </div>
                </div>
        </header>
    )
}

export default Header
