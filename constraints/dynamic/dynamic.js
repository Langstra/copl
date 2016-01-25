var employer_setWage = Employer.prototype.setWage;
Employer.prototype.setWage = function(wage) {
  for(e in employees) {
	  if(employees[e].getWage() > (0.8 * wage)) {
		employees[e].setWage(Math.round(wage * 0.8 * 100)/100);
	  }
  }
  var result = employer_setWage.apply(this, arguments);
  return result;
}

var employee_setWage = Employee.prototype.setWage;
Employee.prototype.setWage = function(wage) {
  if(wage > (0.8 * employer.getWage())) {
	  throw "Mag niet"
  }
  var result = employer_setWage.apply(this, arguments);
  return result;
}