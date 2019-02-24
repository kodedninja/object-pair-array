var test = require('tape')
var opa = require('.')

test('it works', (t) => {
  t.plan(1)

  var obj = {
    one: 1,
    two: 2,
    three: 'three',
    four: {
      value: 4
    }
  }

  t.same(opa(obj), [
    { one: 1 },
    { two: 2 },
    { three: 'three' },
    {
      four: {
        value: 4
      }
    }
  ])
})
