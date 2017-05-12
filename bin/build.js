#!/usr/bin/env node
const path = require('path');
const basicProductionBuild = require('../../spanggle-dev-support/lib/build-support/basic-production-build.js');


basicProductionBuild({
  projectDir: path.resolve(__dirname, '..'),
  baseName: 'kvid',
  standalone: 'kvid'
});
