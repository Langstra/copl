function criminalData(name, date)
{
  this.name = name;
  this.date = date;
  this.activities = [];
  this.suspicions = [];
  this.setName = function(name) { this.name = name; };
  this.getName = function() { return name; };
  this.setBirthDate = function(date) { this.date = date; };
  this.getBirthDate = function() { return this.date; };
  this.addActivity = function(ac) { this.activities.push(ac); };
  this.getActivities = function() { return this.activities; };
  this.addSuspicion = function(ac) { this.suspicions.push(ac); };
  this.getSuspicions = function() { return this.suspicions; };
}
