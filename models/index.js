require('../config/db.connection')

module.exports = {
    Product: require('./Product'),
    User: require('./User'),
    Review: require('./Review'),
    Cart: require('./Cart')
}

mongoose.connect( process.env.MONGODB_URI || "4000" );