delete require.cache[require.resolve('./build-js.cjs')];
require('./build-js.cjs');
delete require.cache[require.resolve('../prerender/prerender.cjs')];
process.argv = [process.argv[0], process.argv[1], 'production'];
require('../prerender/prerender.cjs');
