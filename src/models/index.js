const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const ProductImg = require("./ProductImg");
const Purchase = require("./Purchase");
const User = require("./User");

// Product -> categoryId
Product.belongsTo(Category) // categoryId
Category.hasMany(Product)

//Cart -> userId
Cart.belongsTo(User) //userId
User.hasMany(Cart)

//Cart -> ProductId
Cart.belongsTo(Product) //productId
Product.hasMany(Cart)

//Purchase -> userId
Purchase.belongsTo(User) //userId
User.hasMany(Purchase)

//Cart -> ProductId
Purchase.belongsTo(Product) //productId
Product.hasMany(Purchase)

//ProductImg -> productId
ProductImg.belongsTo(Product) //productId
Product.hasMany(ProductImg)