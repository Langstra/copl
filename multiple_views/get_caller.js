function ObjectB(){
}
ObjectB.prototype = {
  funcB: function() {
    return ObjectB.prototype.funcB.caller;
  }
}

function ObjectA(){
}
ObjectA.prototype = {
  funcA: function() {
    var b = new ObjectB();
    console.log(b.funcB().prototype.name);
    return ObjectA.prototype.funcA.caller;
  }
}

function main()
{
    var a = new ObjectA();
   console.log(a.funcA().name);
}

main();


function getId()
{
  var stack = ErrorStackParser.parse(new Error())[2].functionName;
  console.log(stack.substring(0,stack.indexOf(".")));
}
