import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1)

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)

  useEffect(() => {
    if (error) {

      return alert.error(error)

    }

    dispatch(getProducts());


  }, [dispatch, alert, error])

  function setCurrentPageNo() {
    setCurrentPage(pageNumber)
  }

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={'Kupite najbolje online'} />
          <h1 id="products_heading"> Najnoviji proizvodi </h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products && products.map(product => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </section>


          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={'Sledeća'}
              prevPageText={'Prošla'}
              firstPageText={'Prva'}
              lastPageText={'Poslednja'}
              itemClass="page-item"
              linkClass="page-link"
            />

          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Home
