var vm = require("vm")

var _  = require("underscore")

var Debug = vm.runInDebugContext("Debug")

var dFlags = Debug.debuggerFlags()

console.log("debuggerFlags:\n", dFlags)

dumpFlags()

console.log("changing flags")
dFlags.breakPointsActive.setValue(        !dFlags.breakPointsActive.getValue())
dFlags.breakOnCaughtException.setValue(   !dFlags.breakOnCaughtException.getValue())
dFlags.breakOnUncaughtException.setValue( !dFlags.breakOnUncaughtException.getValue())

dumpFlags()

//------------------------------------------------------------------------------
function dumpFlags() {
  var dFlags = Debug.debuggerFlags()
  console.log("flags:")
  console.log("   breakPointsActive:         "  + dFlags.breakPointsActive.getValue())
  console.log("   breakOnCaughtException:    "  + dFlags.breakOnCaughtException.getValue())
  console.log("   breakOnUncaughtException:  "  + dFlags.breakOnUncaughtException.getValue())
  console.log("")
}
