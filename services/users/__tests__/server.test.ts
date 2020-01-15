import test from 'ava'

import a from '../src/index'

test('foo', t => {
  t.is(a('b'), 'b')
})
