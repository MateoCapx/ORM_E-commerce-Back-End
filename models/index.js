// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});
Category.belongsTo(Product)


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});
Product.belongsTo(Category)



// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  through:"Product"
});
Product.belongsTo(ProductTag,{
  through:"Product"
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  through: "TAG"
});
Tag.belongsTo(Product, {
  through:" TAG"
})



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};