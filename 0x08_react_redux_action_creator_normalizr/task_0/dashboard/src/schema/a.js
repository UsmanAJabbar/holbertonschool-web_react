const a = require('../../../../notifications.json');

console.log(a.filter(notification => notification.author.id == '5debd764a7c57c7839d722e9'))
