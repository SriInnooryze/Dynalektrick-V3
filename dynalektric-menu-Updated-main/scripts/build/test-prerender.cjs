process.argv = [process.argv[0], process.argv[1], 'production'];
require('../prerender/prerender.cjs');
