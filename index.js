var level = require('level');

const db = connectToDatabase ("./test-db");

function connectToDatabase(db){
    return level(db, { valueEncoding: 'json' });
}