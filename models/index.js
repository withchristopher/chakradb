const Keywords = require('./keywords');
const Toothless = require('./toothless');

// Categories have many Products
Toothless.hasMany(Keywords, {
    foreignKey: 'keywords_id'
  })

module.exports = { Keywords, Toothless};