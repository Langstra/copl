function criminalData(name, date)
{
  this.name = name;
  this.date = date;
  this.activities = ['testActivity'];
  this.suspicions = [];
}

criminalData.prototype = {
  setName: function(name) {
    console.log('setName called');
    this.name = name;
    console.log(this);
  },
  getName: function() {
    console.log('getName called');
    console.log(this);
    return this.name;
  },
  setBirthDate: function(date) { this.date = date; },
  getBirthDate: function() { return this.date; },
  addActivity: function(ac) { this.activities.push(ac); },
  getActivities: function() { return this.activities; },
  addSuspicion: function(ac) { this.suspicions.push(ac); },
  getSuspicions: function() { return this.suspicions; }
};

function Judge()
{
  // implementation of a judge
}

Judge.prototype = {
  testView: function() {
    var cd = new criminalData('TestSubject',new Date(2016,1,8));
    cd.setName('NewName');
    console.log(cd.getName());
  }
}

function PublicCrowd()
{
  // implementation of the public crowd
}

PublicCrowd.prototype = {
  testView: function() {
    var cd = new criminalData('TestSubject',new Date(2016,1,8));
    cd.addActivity('NewActivity');
    console.log(cd.getActivities());
  }
}
