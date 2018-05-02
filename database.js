const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const pino = require('pino')();

const env = process.env.NODE_ENV || 'development';
pino.info('ENVIRONEMNT is currently::', env);
const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/gatherticket_${env}`;
const options= {
    //useMongoClient: true,
};

module.exports = {
    mongoose,
    databaseUrl,
    options
};
