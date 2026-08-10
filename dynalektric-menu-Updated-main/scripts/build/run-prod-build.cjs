require('./clean.cjs');
require('./build-js.cjs');
process.argv = [process.argv[0], process.argv[1], 'production'];
require('../prerender/prerender.cjs');
