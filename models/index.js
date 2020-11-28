const Keywords = require('./Keywords');
const Toothless = require('./Toothless');

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