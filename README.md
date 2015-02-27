intro
================================================================================

An interesting feature got added to node.js 0.12 (also available in io.js):
[`vm.runInDebugContext(code)`][vmRunInDebugContext]

The documentation says "*The primary use case is to get access to
the V8 debug object*", using the following snippet:

		var vm = require("vm")

		var Debug = vm.runInDebugContext("Debug")
		Debug.scripts().forEach(function(script) {
			console.log(script.name)
		})

This code snippet should list all the "scripts" V8 has loaded.  Try it, there
are **TONS** of them.

So, what else can you do with this thing.  That's what I'm going to find out.

The place to figure this is out in the REPL, and also by checking out the V8
source for this stuff:

* [debug-debugger.js][]
* [liveedit-debugger.js][]
* [mirror-debugger.js][]

Note that I'm going to be skipping two parts of the Debug object for now:

* `TestApi`
* `LiveEdit`



`Debug` properties/methods
================================================================================


<a id="DebugEvent"></a>
property `DebugEvent`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `Break`
* `Exception`
* `NewFunction`
* `BeforeCompile`
* `AfterCompile`
* `CompileError`
* `PromiseEvent`
* `AsyncTaskEvent`
* `BreakForCommand`


property `ExceptionBreak`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `Caught`
* `Uncaught`


property `StepAction`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `StepOut`
* `StepNext`
* `StepIn`
* `StepMin`
* `StepInMin`
* `StepFrame`


property `ScriptType`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `Native`
* `Extension`
* `Normal`


property `ScriptCompilationType`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `Host`
* `Eval`
* `JSON`


property `ScriptBreakPointType`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `ScriptId`
* `ScriptName`
* `ScriptRegExp`


property `BreakPositionAlignment`
--------------------------------------------------------------------------------

An object with the following properties, whose values are number constants:

* `Statement`
* `BreakPosition`


method `setListener(listener, opt_data)`
--------------------------------------------------------------------------------

Sets an event listening for debug Events.

see: <https://github.com/iojs/io.js/blob/v1.x/deps/v8/test/mjsunit/debug-event-listener.js>

`listener` should be a function with following signature:

		function(event, exec_state, event_data, data)

* `event` will be one of the `DebugEvent` properties
* `exec_state` will be an `ExecState` object
* `event_data` is event-specific data
* `data` is the object passed to `setListener()`'s `opt_data` parameter


method `breakExecution(a)`
--------------------------------------------------------------------------------


method `breakLocations(a,b)`
--------------------------------------------------------------------------------


method `findScript(a)`
--------------------------------------------------------------------------------


method `scriptSource(a)`
--------------------------------------------------------------------------------


method `source(a)`
--------------------------------------------------------------------------------


method `disassemble(a)`
--------------------------------------------------------------------------------


method `disassembleConstructor(a)`
--------------------------------------------------------------------------------


method `ExecuteInDebugContext(a,b)`
--------------------------------------------------------------------------------


method `sourcePosition(a)`
--------------------------------------------------------------------------------


method `findFunctionSourceLocation(a,b,c)`
--------------------------------------------------------------------------------


method `findScriptSourcePosition(a,b,c)`
--------------------------------------------------------------------------------


method `findBreakPoint(a,b)`
--------------------------------------------------------------------------------


method `findBreakPointActualLocations(a)`
--------------------------------------------------------------------------------


method `setBreakPoint(a,b,c,d)`
--------------------------------------------------------------------------------


method `setBreakPointByScriptIdAndPosition(???)`
--------------------------------------------------------------------------------


method `enableBreakPoint(a)`
--------------------------------------------------------------------------------


method `disableBreakPoint(a)`
--------------------------------------------------------------------------------


method `changeBreakPointCondition(a,b)`
--------------------------------------------------------------------------------


method `changeBreakPointIgnoreCount(a,b)`
--------------------------------------------------------------------------------


method `clearBreakPoint(a)`
--------------------------------------------------------------------------------


method `clearAllBreakPoints()`
--------------------------------------------------------------------------------


method `disableAllBreakPoints()`
--------------------------------------------------------------------------------


method `findScriptBreakPoint(a,b)`
--------------------------------------------------------------------------------


method `setScriptBreakPoint(???)`
--------------------------------------------------------------------------------


method `setScriptBreakPointById(???)`
--------------------------------------------------------------------------------


method `setScriptBreakPointByName(???)`
--------------------------------------------------------------------------------


method `setScriptBreakPointByRegExp(???)`
--------------------------------------------------------------------------------


method `enableScriptBreakPoint(a)`
--------------------------------------------------------------------------------


method `disableScriptBreakPoint(a)`
--------------------------------------------------------------------------------


method `changeScriptBreakPointCondition(???)`
--------------------------------------------------------------------------------


method `changeScriptBreakPointIgnoreCount(???)`
--------------------------------------------------------------------------------


method `scriptBreakPoints()`
--------------------------------------------------------------------------------


method `clearStepping()`
--------------------------------------------------------------------------------


method `setBreakOnException()`
--------------------------------------------------------------------------------


method `clearBreakOnException()`
--------------------------------------------------------------------------------


method `isBreakOnException()`
--------------------------------------------------------------------------------


method `setBreakOnUncaughtException()`
--------------------------------------------------------------------------------


method `clearBreakOnUncaughtException()`
--------------------------------------------------------------------------------


method `isBreakOnUncaughtException()`
--------------------------------------------------------------------------------


method `showBreakPoints(a,b,c)`
--------------------------------------------------------------------------------


method `scripts()`
--------------------------------------------------------------------------------


method `debuggerFlags()`
--------------------------------------------------------------------------------


method `MakeMirror(a,b)`
--------------------------------------------------------------------------------


object `ExecState`
================================================================================


<!-- ======================================================================= -->

[vmRunInDebugContext]:  https://iojs.org/api/vm.html#vm_vm_runindebugcontext_code
[debug-debugger.js]:    https://github.com/iojs/io.js/blob/v1.x/deps/v8/src/debug-debugger.js
[liveedit-debugger.js]: https://github.com/iojs/io.js/blob/v1.x/deps/v8/src/liveedit-debugger.js
[mirror-debugger.js]:   https://github.com/iojs/io.js/blob/v1.x/deps/v8/src/mirror-debugger.js