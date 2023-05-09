const express= require('express')
const route=express.Router()
const services= require('../services/render')
const controller= require('../controller/controller')

route.get('/',services.homeRoutes)

route.get('/add-product',services.add_product)

route.get('/update-product',services.update_product)

route.get('/add-category',services.add_category)
route.get('/category',services.category)


route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);


route.post('/api/category', controller.create_category);
route.get('/api/category', controller.find_category);
route.delete('/api/category/:id', controller.delete_category);

module.exports=route