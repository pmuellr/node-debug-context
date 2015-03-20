var vm = require("vm")

var _  = require("underscore")

var foo = require("./foo")

var Debug = vm.runInDebugContext("Debug")

Debug.scripts().forEach(dumpScript)

//------------------------------------------------------------------------------
function dumpScript(script) {
  console.log("---------------------------------------------------------------")

  Object.getOwnPropertyNames(script).forEach(function(prop) {
    var val
    switch(prop) {
      case "source":           val = script.source.length + " chars"; break
      case "type":             val = scriptType(script.type); break
      case "line_ends":        val = script.line_ends.length + " of 'em"; break
      case "compilation_type": val = scriptCompilationType(script.compilation_type); break
      default:                 val = script[prop]
    }
    console.log(left(prop, 30) + ":", val)
  })
}

//------------------------------------------------------------------------------
function left(s, len) {
  while (s.length < len) s+= " "
  return s
}

//------------------------------------------------------------------------------
function scriptType(value) {
  if (value == Debug.ScriptType.Native)     return "Native"
  if (value == Debug.ScriptType.Extension)  return "Extension"
  if (value == Debug.ScriptType.Normal)     return "Normal"
  return "???"
}

//------------------------------------------------------------------------------
function scriptCompilationType(value) {
  if (value == Debug.ScriptCompilationType.Host)  return "Host"
  if (value == Debug.ScriptCompilationType.Eval)  return "Eval"
  if (value == Debug.ScriptCompilationType.JSON)  return "JSON"
  return "???"
}
