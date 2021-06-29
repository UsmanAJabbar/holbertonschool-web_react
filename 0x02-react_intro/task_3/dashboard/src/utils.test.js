const { expect } = require('chai');
const { getFullYear,
        getFooterCopy,
        getLatestNotifcation } = require('./utils')

describe('Test getFullYear', () => {
  it('Test getFullYear', () => {
    const currentYear = getFullYear();
    expect(currentYear).to.equal(2021);
  });
})

describe('Test getFooterCopy', () => {
  it('Test getFooterCopy(true)', () => {
    const ret = getFooterCopy(true);
    expect(ret).to.equal('Holberton School')
  })
  it('Test getFooterCopy(false)', () => {
    const ret = getFooterCopy(false);
    expect(ret).to.equal('Holberton School main dashboard');
  })
  it('Test getFooterCopy( /* Unexpected Input */ )', () => {
    const ret = getFooterCopy('Some random input');
    expect(ret).to.equal('Holberton School main dashboard');
  })
});

describe('Test getLatestNotification function', () => {
  it('Test getLatestNotification', () => {
    const ret = getLatestNotifcation();
    expect(ret).to.equal('<strong>Urgent requirement</strong> - complete by EOD');
  });
});