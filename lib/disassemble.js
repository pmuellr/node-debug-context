var vm   = require("vm")
var path = require("path")

var _  = require("underscore")

var foo = require("./foo")

var Debug = vm.runInDebugContext("Debug")

console.log("---------------------------------------------------------------")
console.log("disassembly of ?")
console.log(Debug.disassemble(require))
