const task3 = require("./task3");

class WorkingPersonClass extends task3.PersonClass {
  constructor(data) {
    super(data);
    this.data = data;
  }

  getProfessionalNameAndRank() {
    const {
      firstName,
      lastName,
      job: { title, experience },
    } = this.data;
    if (!this.validate([firstName, lastName, title, experience])) {
      return "Error";
    }
    return `${firstName} ${lastName}, ${title}, job experience ${experience} years`;
  }
}

const elizabeth = new WorkingPersonClass(task3.Elizabeth);
console.log(elizabeth.getProfessionalNameAndRank());

const sarahMay = new WorkingPersonClass(task3.SarahMay);
console.log(sarahMay.getProfessionalNameAndRank());

const jeremieBrown = new WorkingPersonClass(task3.JeremieBrown);
console.log(jeremieBrown.getProfessionalNameAndRank());
