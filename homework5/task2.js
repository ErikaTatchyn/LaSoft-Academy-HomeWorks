// write a constructor function WorkingPersonFunc which inherits from PersonFunc and implements additional method:
// getProfessionalNameAndRank() => returns string in format "[FirstName] [LastName], [job title], job experience [job experience duration] years", e.g. "Roman Krychkovskyy, Front-end developer, job experience 3 years".
// Please implement error handling in case if some fields are not available.
const task1 = require("./task1");

function WorkingPersonFunc(data) {
  task1.PersonFunc.call(this, data);
}

WorkingPersonFunc.prototype = Object.create(task1.PersonFunc.prototype);

WorkingPersonFunc.prototype.getProfessionalNameAndRank = function () {
  const {
    firstName,
    lastName,
    job: { title, experience },
  } = this.data;
  if (!this.validate([firstName, lastName, title, experience])) {
    return "Error";
  }
  return `${firstName} ${lastName}, ${title}, job experience ${experience} years`;
};

const elizabeth = new WorkingPersonFunc(task1.Elizabeth);
console.log(elizabeth.getProfessionalNameAndRank());

const sarahMay = new WorkingPersonFunc(task1.SarahMay);
console.log(sarahMay.getProfessionalNameAndRank());

const jeremieBrown = new WorkingPersonFunc(task1.JeremieBrown);
console.log(jeremieBrown.getProfessionalNameAndRank());
