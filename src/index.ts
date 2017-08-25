import resolveResource from './resolve/resolve-resource';
import resolveJS from './resolve/resolve-js';
import resolveTS from './resolve/resolve-ts';
import opt from './option';
const version = require('../package.json').version;

export { version, resolveJS, resolveResource, resolveTS, opt };
