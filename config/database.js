const mongoose = require('mongoose');
const mongoDB = 'mongodb://kaushik:Password123#@ds135714.mlab.com:35714/nodes-demo';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
