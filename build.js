var through = require('through');

require('knode-meetups')().pipe(through(function write (data) {
  console.log(data);
}, function () {
  this.queue(null);
}));