const assert = require('assert');
const { getFullYear,
        getFooterCopy,
        getLatestNotifcation } = require('./utils')

describe('Test getFullYear', () => {
  it('Test getFullYear', () => {
    const currentYear = getFullYear();
    assert.equal(currentYear, 2021);
  });
})

describe('Test getFooterCopy', () => {
  it('Test getFooterCopy(true)', () => {
    const ret = getFooterCopy(true);
    assert.equal(ret, 'Holberton School')
  })
  it('Test getFooterCopy(false)', () => {
    const ret = getFooterCopy(false);
    assert.equal(ret, 'Holberton School main dashboard');
  })
  it('Test getFooterCopy( /* Unexpected Input */ )', () => {
    const ret = getFooterCopy('Some random input');
    assert.equal(ret, 'Holberton School main dashboard');
  })
});

describe('Test getLatestNotification function', () => {
  it('Test getLatestNotification', () => {
    const ret = getLatestNotifcation();
    assert.equal(ret, '<strong>Urgent requirement</strong> - complete by EOD');
  });
});