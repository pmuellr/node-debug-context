var vm   = require("vm")
var path = require("path")

var _  = require("underscore")

var foo = require("./foo")

var Debug = vm.runInDebugContext("Debug")

console.log("---------------------------------------------------------------")
console.log("source of foo.foo")
console.log(Debug.source(foo.foo))
