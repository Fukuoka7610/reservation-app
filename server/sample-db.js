// MongoDBへのサンプルデータ
const Product = require('./model/product');

class SampleDb{
    constructor() {
        this.products = [
            {
                coverImage: "./assets/img/phone-cover.jpg",
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
              },
              {
                coverImage: "./assets/img/phone-cover.jpg",
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
              },
              {
                coverImage: "./assets/img/phone-cover.jpg",
                name: 'Phone Standard',
                price: 299,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
              },
              {
                coverImage: "./assets/img/phone-cover.jpg",
                name: 'Phone Special',
                price: 999,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
              }
        ];
    };

    async initDb(){ // MongoDBに残ってしまうドキュメントデータを削除してから、pushProductsToDb()を実行
       await this.cleanDb();
       this.pushProductsToDb();
    };
    
    async cleanDb(){ // deleteMany({})が実行された後に、pushProductToDb()を実行したいので、'await' ('async' : 'await'を含んでいる関数につける, 'await' : 対象の処理が終わるまで次の処理を待機させる)
      await Product.deleteMany({}); // .deleteMany({ }) : 空の状態で実行されると、オブジェクトのドキュメントデータが一式削除される
    };

    pushProductsToDb() { // 上記のプロダクト情報を元に新規オブジェクトを作成
        this.products.forEach( // .forEach() : 配列の要素に自作した引数名を与えて、各要素ごとに指定した処理を施す
            (product)=>{
                const newProduct = new Product(product); // new Productの'Product'は'server/model/product.jsのmongoose.model('Product', ProductSchema)のProductを指している
                newProduct.save();
            }
        ); 
    };

    seeDb() {
        this.pushProductsToDb();
    };
};

// product.jsと同様に、作成したsampleDbをエクスポートすることに注意
module.exports = SampleDb;