var vm   = require("vm")
var path = require("path")

var _  = require("underscore")

var foo = require("./foo")

var Debug = vm.runInDebugContext("Debug")

var name = new RegExp(path.basename(__filename))
var name = Debug.findScript(name).name

console.log("---------------------------------------------------------------")
console.log("source of " + name)
console.log(Debug.scriptSource(name))

console.log("---------------------------------------------------------------")
console.log("source of script with foo.foo()")
console.log(Debug.scriptSource(foo.foo))
