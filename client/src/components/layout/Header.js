import '../../App.css';
import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <img src="/images/brend.png" />
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="input-group">
                        <input 
                        type="text"
                        id="search_field"
                        className="form-control"
                        placeholder="Upiši naziv proizvoda..."
                        />
                        <div className="input-group-append">
                            <button id="search_btn" className="btn">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <button className="btn" id="login_btn">Prijava</button>
                    <button className="btn" id="register_btn">Registracija</button>

                    <span id="cart" className="ml-3">Korpa</span>
                    <span className="ml-1" id="cart_count">3</span>
                </div>
            </nav>
        </Fragment>
    )
}


export default Header;