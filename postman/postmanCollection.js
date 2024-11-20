const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
//execute- node postmanCollection.js
newman.run({
    collection: require('../collections/NEXT_JS_APP_UNITTEST.postman_collection.json'),
    reporters: ['cli', 'csv','htmlextra']
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});