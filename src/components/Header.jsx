import React from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Logo from './../assets/images/logo.png';

const Header = () => {


    return (
        <header className="header text-center py-2">
                <div className="container">
                    <div className="row">
                        <picture className="header__picture text-center col-3 d-flex justify-content-center justify-content-md-start align-items-center">
                            <img className="img-fluid" src={Logo} alt={Logo} />
                        </picture>
                        <nav className="header__menu col-9 d-flex justify-content-end align-items-center">
                        <Link to={`/`} className="card-link">
                            <Button color="primary">Home</Button>
                        </Link> 
                        <Link to={`/myfavorites`} className="card-link">
                            <Button color="primary">My Favorites</Button>
                        </Link> 
                        </nav>
                    </div>
                </div>
        </header>
    )
}

export default Header
