const express = require("express");
const ProductController = require("../controllers/product_controler");

const router = express.Router();

router.get("/", ProductController.index);

module.exports = router;
