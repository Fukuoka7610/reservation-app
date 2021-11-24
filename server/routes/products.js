// URLのエンドポイントを機能ごとに分けるファイル
const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('', function(req, res){
    // サーバーとの通信が確立された場合、products.jsの情報を返す
    Product.find({}, function(err, foundProducts){ // .find() : DBからProduct(オブジェクト)の情報を見つけ出す
        return res.json(foundProducts);
    });  
});

// URLの末尾にproductIdを追加すると、その商品情報のみを返すようにする
router.get('/:productId', function(req, res){
    const productId = req.params.productId; // URLのプロダクトIDが取得可能になる
    
    Product.findById(productId, function(err, foundProduct){ // .find() : DBからProduct(オブジェクト)の情報を見つけ出す
        if(err){ // 存在しないproductIdが入力された場合に返すエラーメッセージ
            return res.status(422).send({ errors: [{ title: 'Product eeror', detail: 'Product not found!'}]});
        }
        return res.json(foundProduct);
    });  
});

module.exports = router;