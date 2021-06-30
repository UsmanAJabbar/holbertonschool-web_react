const getFullYear = () => new Date().getFullYear();
const getFooterCopy = (isIndex) => isIndex === true ? 'Holberton School':
                                                      'Holberton School main dashboard';
const getLatestNotifcation = () => '<strong>Urgent requirement</strong> - complete by EOD';

module.exports = { getFullYear, getFooterCopy, getLatestNotifcation };