const appRootPath = require('app-root-path');
const fileExists = require('file-exists');
const env = require('node-env-file');
const path = require('path');

module.exports = {
    get: () => {
        const envFileLocation = path.join( appRootPath.path, 'env.local' );
        console.log(`envFileLocation=${envFileLocation}`);
        if (fileExists.sync(envFileLocation)) {
            env(envFileLocation);
        }
    }
};