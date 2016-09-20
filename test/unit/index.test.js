/* eslint-env mocha */
import assert from 'assert';
import identity from '../../src/identity';

describe('identity test', function () {
  it('works', function () {
    assert.ok(identity(true));
  });
});
