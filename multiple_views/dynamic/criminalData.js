function CriminalData(name, date)
{
  this.name = name;
  this.date = date;
  this.activities = ['testActivity'];
  this.suspicions = ['testSuspicion'];
}

CriminalData.prototype = {
  setName: function(name) {
    this.name = name;
  },
  getName: function() {
    return this.name;
  },
  setBirthDate: function(date) { this.date = date; },
  getBirthDate: function() { return this.date; },
  addActivity: function(ac) { this.activities.push(ac); },
  getActivities: function() { return this.activities; },
  addSuspicion: function(ac) { console.log(ac); this.suspicions.push(ac); },
  getSuspicions: function() { return this.suspicions; }
};

criminals = [new CriminalData('Al Capone',new Date(1899, 1, 17))];

function Judge()
{
  // implementation of a judge
  this.cd = criminals;
}

Judge.prototype = {
  testView: function(func, args) {
    this.cd[0][func](args);
  }
}

function PublicCrowd()
{
  // implementation of the public crowd
  this.cd = criminals;
}

PublicCrowd.prototype = {
  testView: function(func, args) {
    this.cd[0][func](args);
  }
}

function PoliceOfficer()
{
  // implementation of a police officer
  this.cd = criminals;
}
PoliceOfficer.prototype = {
  testView: function(func, args) {
    this.cd[0][func](args);
  }
}
