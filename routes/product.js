const express = require('express');
const router = express.Router();

const {create, update,productById,read,remove, photo, list, listRelated, listCategories, listBySearch} = require('../controllers/product');
const {requireSignin, isAuth, isAdmin} = require("../controllers/auth");
const {userById} = require("../controllers/user");

const {userSignupValidator} = require("../validator");


router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.get('/products', list);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/product/:productId/:userId", requireSignin, isAuth, isAdmin, update);
router.get("/product/:productId", read)
router.delete("/product/:productId/:userId",requireSignin, isAuth, isAdmin, remove);
router.post("/products/by/search", listBySearch);
router.get('/product/photo/:productId', photo)


router.param("userId", userById);
router.param("productId", productById);


module.exports = router;
