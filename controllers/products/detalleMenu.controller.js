module.exports= (req,res)=>{
    const arrProductos=[
        {
            id:1,
            name:"carpaccio",
            price:110.000,
            discount:25,
            img:"Carpaccio-de-salmon.jpg"
        },
        {
            id:2,
            name:"Eparragos",
            price:95.000,
            discount:10,
            img:"esparragos.jpg"
        },
        {
            id:3,
            name:"Mousse",
            price:65.000,
            discount:15,
            img:"Mousse-de-arroz-con-leche.jpg"
        },
        {
            id:4,
            name:"  Risotto",
            price:45.000,
            discount:10,
            img:"Risotto-berenjena-queso-cabra"
        },
];

res.render('detalle',{
    productos:arrProductos
});
}
