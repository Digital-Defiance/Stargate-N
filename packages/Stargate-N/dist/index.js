
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./stargate-n.cjs.production.min.js')
} else {
  module.exports = require('./stargate-n.cjs.development.js')
}
