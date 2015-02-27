var vm = require("vm")

var _  = require("underscore")

var Debug = vm.runInDebugContext("Debug")

var data = { a: 1, b: 2, c: 4}
Debug.setListener(listener, data)

eval("console.log('eval()d something')")

//------------------------------------------------------------------------------
function listener(event, exec_state, event_data, data) {
  console.log()
  console.log("event!")
  console.log("----------------------------")
  console.log("  event:", getEventName(event))
  console.log("  exec_state:", exec_state)
  console.log("  event_data:", event_data)
  console.log("  data:", data)
}

//------------------------------------------------------------------------------
function getEventName(event) {
  if (event == Debug.DebugEvent.Break)           return "Break"
  if (event == Debug.DebugEvent.Exception)       return "Exception"
  if (event == Debug.DebugEvent.NewFunction)     return "NewFunction"
  if (event == Debug.DebugEvent.BeforeCompile)   return "BeforeCompile"
  if (event == Debug.DebugEvent.AfterCompile)    return "AfterCompile"
  if (event == Debug.DebugEvent.CompileError)    return "CompileError"
  if (event == Debug.DebugEvent.PromiseEvent)    return "PromiseEvent"
  if (event == Debug.DebugEvent.AsyncTaskEvent)  return "AsyncTaskEvent"
  if (event == Debug.DebugEvent.BreakForCommand) return "BreakForCommand"
  return "???"
}
