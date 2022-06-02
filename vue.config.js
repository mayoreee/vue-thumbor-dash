const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require('webpack-node-externals');


module.exports = {
  configureWebpack: {
    target: 'web',
    externalsPresets: { node: false },
    plugins: [
      new NodePolyfillPlugin(),
    ],
    externals: {
      'node:fs': 'commonjs2 node:fs',
      'node:zlib': 'commonjs2 node:zlib',
      'node:util': 'commonjs2 node:util',
      'node:url': 'commonjs2 node:url',
      'node:stream': 'commonjs2 node:stream',
      'node:stream/web': 'commonjs2 node:stream/web',
      'node:process': 'commonjs2 node:process',
      'node:path': 'commonjs2 node:path',
      'node:net': 'commonjs2 node:net',
      'node:http': 'commonjs2 node:http',
      'node:https': 'commonjs2 node:https',
      'node:buffer': 'commonjs2 node:buffer',
    },
    resolve: {
      fallback: {
        "fs": false,
      }
    },
  },  
};