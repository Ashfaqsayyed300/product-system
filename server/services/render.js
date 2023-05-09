const axios = require('axios')

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/products')
    .then(function(response){
        res.render('index',{products: response.data})
    })
    .catch(err =>{
        res.send(err);
    })
}
exports.add_product = (req, res) =>{
    axios.get('http://localhost:3000/api/category')
    .then(function(response){
        res.render('add_product',{category: response.data})
    })
    .catch(err =>{
        res.send(err);
    })
    // res.render('add_product');
}
exports.update_product = (req, res) =>{
    axios.get('http://localhost:3000/api/products', {params:{id: req.query.id}})
    .then(function(productData){
        console.log(productData);
        res.render('update_product',{product: productData.data});
    })
    .catch(err =>{
        res.send(err);
    })
}
exports.category = (req, res) =>{
    axios.get('http://localhost:3000/api/category')
    .then(function(response){
        res.render('category',{category: response.data})
    })
    .catch(err =>{
        res.send(err);
    })
}
exports.add_category = (req, res) =>{
    res.render('add_category');
}