const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

const otherRoutes = require("./routes/other.routes")
const productosRoutes= require("./routes/productos.routes")

app.use(express.static("./public"))

app.set("view engine","ejs");
app.set("views","./views")



app.use("/",otherRoutes)
app.use("/productos",productosRoutes)



app.listen(port, () => (console.log(`corriendo puerto http://localhost:${port}`)))
