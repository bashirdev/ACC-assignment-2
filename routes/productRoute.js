import express from 'express'
const router= express.Router();
import {addProduct, getProdut, getDelete, productUpdate,deleteById} from '../middleWare/product.js'

router.route('/addProduct').post(addProduct) //post
router.route('/:id').put(productUpdate) //update
router.route('/:id').delete(deleteById) //single delete by id
router.route('/getItem').get(getProdut) //get item
router.route('/getDelete').delete(getDelete) //all delete

export default router