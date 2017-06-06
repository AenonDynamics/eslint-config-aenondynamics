const _assert = require('assert');
const _eslint = require('eslint');
const _ruleset = require('../ruleset.js');

// run eslint selftest
const report = new _eslint.CLIEngine({
    useEslintrc: false,
    extends: ["eslint:recommended"],
    env: _ruleset.env,
    parserOptions: _ruleset.parserOptions,
    rules: _ruleset.rules,
}).executeOnFiles(['ruleset.js']);

_assert.equal(report.errorCount, 0);
_assert.equal(report.warningCount, 0);