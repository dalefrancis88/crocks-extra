const test = require('tape')
const crocksExtra = require('./index')

test('entry', t => {
  t.equal(crocksExtra.toString(), '[object Object]', 'is an object')

  t.end()
})
