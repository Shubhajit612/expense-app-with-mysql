// const Product = require('../models/expense');
const Expense = require('../models/expense');

const addProduct = async (req,res,next)=>{
try{


    const price = req.body.price;
    const product = req.body.product;

    const data = await Expense.create({price:price,product:product});
    res.status(201).json({newProductDetails:data});
}
catch(err){
    // console.log(err);
    res.status(500).json({
        error:err
    })
}
}

const getProduct = async(req,res,next)=>{
    try{
        const products = await Expense.findAll();
        res.status(200).json({allProducts:products});

    }
    catch(err){
        console.log('Get product is failing',JSON.stringify(err));
        res.status(500).json({error:err});
    }
}

const deleteProduct = async (req,res) =>{
    try{
        if(req.params.id === 'undefined'){
            console.log('Id is missing..');
            res.status(400).json({err:'Id is Missing'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }

    const productID = req.params.id;
    await Expense.destroy({where:{id:productID}});
    res.sendStatus(200);
}

const updateProduct = async (req,res)=>{
    try{
        const productID = req.params.id;
        const price = req.body.price;
        const product = req.body.product;

        const updateProducts = await Expense.update(
            {
                price:price,
                product:product
            },
            {where:{id:productID}}
        );

        res.status(201).json({newProductDetail: updateProducts});

    }
    catch(err){
        res.send(err);
    }
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct
}