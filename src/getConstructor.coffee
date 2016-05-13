
PureObject = require "PureObject"
Nan = require "Nan"

module.exports = (value) ->
  return unless value?
  return if PureObject.test value
  return if Nan.test value
  return value.constructor
