var old_setName = CriminalData.prototype.setName;
CriminalData.prototype.setName = function(name) {
  checkView(['Judge','PublicCrowd']);
  var result = old_setName.apply(this, arguments);
  return result;
}

var old_setBirthDate = CriminalData.prototype.setBirthDate;
CriminalData.prototype.setBirthDate = function(date) {
  checkView(['Judge','PublicCrowd']);
  var result = old_setBirthDate.apply(this, arguments);
  return result;
}

var old_addActivity = CriminalData.prototype.addActivity;
CriminalData.prototype.addActivity = function(ac) {
  checkView(['Judge','PublicCrowd']);
  var result = old_addActivity.apply(this, arguments);
  return result;
}

var old_getActivities = CriminalData.prototype.getActivities;
CriminalData.prototype.getActivities = function(ac) {
  checkView(['PublicCrowd']);
  var result = old_getActivities.apply(this, arguments);
  return result;
}

var old_addSuspicion = CriminalData.prototype.addSuspicion;
CriminalData.prototype.addSuspicion = function(ac) {
  checkView(['Judge','PublicCrowd']);
  var result = old_addSuspicion.apply(this, arguments);
  return result;
}

var old_getSuspicions = CriminalData.prototype.getSuspicions;
CriminalData.prototype.getSuspicions = function(ac) {
  checkView(['Judge','PublicCrowd']);
  var result = old_getSuspicions.apply(this, arguments);
  return result;
}

function checkView(restrictions)
{
  for (res in restrictions)
  {
    if (getId() == restrictions[res])
    {
      throw "No access allowed";
    }
  }
}

getId = function()
{
  var stack = ErrorStackParser.parse(new Error());
  var id = stack[(stack.length)-3].functionName;
  return id.substring(0,id.indexOf("."));
}
