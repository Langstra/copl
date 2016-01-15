var Employer = function() {
  this.wage = 5;
}

Employer.prototype = {
  setWage: function(wage) {
    this.wage = wage;
  },
  getWage: function() {
    return this.wage;
  }
}

var Employee = function() {
  this.wage = 3;
}

Employee.prototype = {
  setWage: function(wage) {
    this.wage = wage;
  },
  getWage: function() {
    return this.wage;
  }
}
