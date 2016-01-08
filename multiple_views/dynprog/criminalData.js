function criminalData(name, date)
{
  this.name = name;
  this.date = date;
  this.activities = [];
  this.suspicions = [];
}

criminalData.prototype = {
  setName: function(name) { this.name = name; };
  getName: function() { return name; };
  setBirthDate: function(date) { this.date = date; };
  getBirthDate: function() { return this.date; };
  addActivity: function(ac) { this.activities.push(ac); };
  getActivities: function() { return this.activities; };
  addSuspicion: function(ac) { this.suspicions.push(ac); };
  getSuspicions: function() { return this.suspicions; };
}
