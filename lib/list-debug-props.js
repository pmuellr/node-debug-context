var vm = require("vm")

var _  = require("underscore")

var Debug = vm.runInDebugContext("Debug")

console.log("Debug properties:")
console.log("")
for (var name in Debug) {
  dump(name, Debug[name])
  console.log()
}

//------------------------------------------------------------------------------
function dump(name, val) {
  if (_.isFunction(val)) return dumpFunction(name, val)

  console.log(name + ":", val)
}

//------------------------------------------------------------------------------
function dumpFunction(name, fn) {
  fn = fn.toString()

  var match = fn.match(/.*?function(.*?)\((.*?)\).*/)
  if (!match) {
    console.log("method " + name + "(???)")
    return
  }

  console.log("method " + name + "(" + match[2] + ")")
}
