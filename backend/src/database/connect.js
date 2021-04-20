const typeorm = require('typeorm');

typeorm.createConnection().then(() => console.log('✅ Successfully connected with database'));