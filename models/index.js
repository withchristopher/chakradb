const Keywords = require('./keywords');
const Toothless = require('./toothless');

// Products belongsTo Category
Keywords.belongsTo(Toothless, {
    foreignKey: 'toothless_id',
    onDelete: 'SET NULL'
  })

// Categories have many Products
Toothless.hasMany(Keywords, {
    foreignKey: 'toothless_id'
  })

module.exports = { Keywords, Toothless };