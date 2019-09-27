const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    titre: String,
    annee: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);