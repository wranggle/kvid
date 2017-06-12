#!/usr/bin/env node
const path = require('path');
const basicProductionBuild = require('../../spanggle-dev-support/lib/js-build.js');


basicProductionBuild({
  projectDir: path.resolve(__dirname, '..'),
  baseName: 'kvid',
  standalone: 'kvid'
});
