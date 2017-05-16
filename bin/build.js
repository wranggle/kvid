#!/usr/bin/env node
const path = require('path');
const basicProductionBundler = require('../../spanggle-dev-support/lib/build-support/basic-production-bundler.js'); // todo: move into yet another module?

const projectDir = path.resolve(__dirname, '..');
basicProductionBundler(projectDir, {
  filename: 'kvid.js',
  standalone: 'kvid'
});
