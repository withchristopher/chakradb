const Keywords = require('./keywords');
const Toothless = require('./toothless');

// Categories have many Products
Toothless.hasMany(Keywords, {
    foreignKey: 'toothless_id'
  })

module.exports = { Keywords, Toothless};