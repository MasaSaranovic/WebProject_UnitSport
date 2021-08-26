const express = require('express')
const router = express.Router();

const {
    getProducts,
    getAdminProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview

} = require('../controllers/productController')

const { isAuthenticatedUser, autorizeRoles } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/admin/products').get(getAdminProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser,  autorizeRoles('admin'), newProduct);

router.route('/admin/product/:id')
                .put(isAuthenticatedUser, autorizeRoles('admin'), updateProduct)
                .delete(isAuthenticatedUser, autorizeRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

module.exports = router;