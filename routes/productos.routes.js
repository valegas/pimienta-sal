const express = require("express")
const router = express.Router()
const productosController = require("../controllers/products")


router.get("/detalle/:id", productosController.detalleMenu)

module.exports = router