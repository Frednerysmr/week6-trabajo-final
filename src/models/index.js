const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
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