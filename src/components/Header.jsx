import React from 'react'
import Logo from './../assets/images/logo.png'

const Header = () => {

    const title = 'The Breaking Dad';

    return (
        <header className="header text-center py-2">
                <div className="container">
                    <div className="row">
                        <picture className="header__picture text-center col-3 d-flex justify-content-center justify-content-md-start align-items-center">
                            <img className="img-fluid" src={Logo} alt={Logo} />
                        </picture>
                        <div className="header__title col-9 d-flex justify-content-end justify-content-md-center align-items-center">
                            <h1 className="m-0">{title}</h1>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Header
