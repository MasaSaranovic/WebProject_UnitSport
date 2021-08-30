import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useDispatch, useSelector } from 'react-redux'

import { getAdminProducts } from '../../actions/productActions'
import { allOrders } from '../../actions/orderActions'
import { allUsers } from '../../actions/userActions'

const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products)
    const { users } = useSelector(state => state.allUsers)
    const { orders, totalAmount, loading } = useSelector(state => state.allOrders)

    let outOfStock = 0;
    products.forEach(product => {
        if (product.stock === 0) {
            outOfStock += 1;
        }
    })

    useEffect(() => {

        dispatch(getAdminProducts())
        dispatch(allOrders())
        dispatch(allUsers())

    }, [dispatch]);
    return (
        <Fragment>

            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <h1 className="my-4">Komandna Tabla</h1>

                    {loading ? <Loader /> : (
                        <Fragment>
                            <MetaData title={'Admin Komandna tabla'} />
                            <div className="row pr-4">
                                <div className="col-xl-12 col-sm-12 mb-3">
                                    <div className="card text-black bg-light border border-dark o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Ukupan iznos<br /> <b>${totalAmount && totalAmount.toFixed(2)}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pr-4">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-black bg-light border border-dark o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center ml-2 card-font-size">Proizvodi<br /> <b>{products && products.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-dark clearfix small z-1" to="/admin/products">
                                            <span className="float-left">Više Detalja</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-black bg-light border border-dark o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center ml-2 card-font-size">Porudžbine<br /> <b>{orders && orders.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-dark clearfix small z-1" to="/admin/orders">
                                            <span className="float-left">Više Detalja</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-black bg-light border border-dark o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center ml-2 card-font-size">Korisnici<br /> <b>{users && users.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-dark clearfix small z-1" to="/admin/users">
                                            <span className="float-left">Više detalja</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-black bg-light border border-dark o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center ml-2  card-font-size">Rasprodati proizvodi<br /><b>{outOfStock}</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}



                </div>

            </div>

        </Fragment >
    )
}

export default Dashboard
