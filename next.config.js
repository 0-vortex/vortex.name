// next.config.js
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const deploy = './deploy/'

module.exports = {
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        if (dev) {
            return defaultPathMap
        }

        await copyFile(join(dir, `${deploy}CNAME`), join(outDir, 'CNAME'))
        return defaultPathMap
    }
}
