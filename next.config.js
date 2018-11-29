// next.config.js
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const deploy = './deploy/';

require('json5/lib/register');

module.exports = {
  webpack(config) {
    config.node = { fs: 'empty' };

    return config;
  },
  webpackDevMiddleware: config => config,
  async exportPathMap(defaultPathMap, {
    dev, dir, outDir,
  }) {
    if (dev) {
      return defaultPathMap;
    }

    await copyFile(join(dir, `${deploy}CNAME`), join(outDir, 'CNAME'));
    await copyFile(join(dir, `${deploy}.nojekyll`), join(outDir, '.nojekyll'));

    return defaultPathMap;
  },
};
