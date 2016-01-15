function CriminalData(name, date)
{
  this.name = name;
  this.date = date;
  this.activities = ['testActivity'];
  this.suspicions = ['testSuspicion'];
}

CriminalData.prototype = {
  setName: function(name) {
    console.log('setName called');
    this.name = name;
  },
  getName: function() {
    console.log('getName called');
    return this.name;
  },
  setBirthDate: function(date) { this.date = date; },
  getBirthDate: function() { return this.date; },
  addActivity: function(ac) { this.activities.push(ac); },
  getActivities: function() { return this.activities; },
  addSuspicion: function(ac) { this.suspicions.push(ac); },
  getSuspicions: function() { return this.suspicions; }
};

criminals = [new CriminalData('Al Capone',new Date(1899, 1, 17))];
console.log(criminals);

function Judge()
{
  // implementation of a judge
  this.cd = criminals;
}

Judge.prototype = {
  testView: function() {
    this.cd[0].setName('NewName');
    console.log(this.cd[0].getName());
  }
}

function PublicCrowd()
{
  // implementation of the public crowd
  this.cd = criminals;
}

PublicCrowd.prototype = {
  testView: function() {
    this.cd[0].addActivity('NewActivity');
    console.log(this.cd[0].getActivities());
  }
}

function PoliceOfficer()
{
  // implementation of a police officer
  this.cd = criminals;
}
