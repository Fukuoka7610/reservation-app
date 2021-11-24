const express = require('express');
const app = express();
const PORT = process.env.PORT || '3001';
const config = require('./config/dev');
const mongoose = require('mongoose');
const SampleDb = require('./sample-db');
const productRoutes =  require('./routes/products');

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        const sampleDb = new SampleDb();
        sampleDb.initDb();
    }
);

app.use('/api/v1/products', productRoutes); // URLの末尾で'/api/v1/products'を打つと、'server/routes/products.js'の'router.get()'が呼ばれる

app.listen(PORT, function(){
    console.log('I am runnning');
});