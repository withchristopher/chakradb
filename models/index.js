const Keywords = require('./keywords');
const Toothless = require('./toothless');

// Keywords belongsTo a Document
Keywords.belongsTo(Toothless, {
    foreignKey: 'toothless_id',
    onDelete: 'SET NULL'
  })

// Documents have many Keywords
Toothless.hasMany(Keywords, {
    foreignKey: 'toothless_id'
  })

module.exports = { Keywords, Toothless };