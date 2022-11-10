// write a class PersonClass which has the same functionality as PersonFunc constructor function.
// Don't forget to implement error handling in case if some fields are not available here as well.

const SarahMay = {
  firstName: "Sarah",
  lastName: "May",
  birthDate: "13.03.1990",
  address: {
    country: "Spain",
    city: "Seville",
    street: "calle Verde",
    house: "5",
    apartment: "2A",
  },
  job: {
    title: "teacher",
    experience: 5,
  },
};

const JeremieBrown = {
  firstName: "Jeremie",
  lastName: "Brown",
  birthDate: "10.11.1983",
  address: {
    country: "Great Britain",
    city: "Bristol",
    street: "Park street",
    house: "14",
  },
  job: {
    title: "sale manager",
    experience: 10,
  },
};

const Elizabeth = {
  firstName: "Elizabeth",
  birthDate: "27.02.1998",
  address: {
    country: "Italy",
    city: "Verona",
    street: "via Calchirelli",
    house: "9F",
    apartment: "49",
  },
  job: {
    title: "fitness coach",
    experience: 1.5,
  },
};

function getYears(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

class PersonClass {
  constructor(data) {
    this.data = data;
  }

  validate(fields) {
    return fields.every((field) => !!field);
  }

  // get fullName() {
  //   return this.getFullName();
  // }

  getFullName() {
    const { firstName, lastName } = this.data;
    if (!this.validate([firstName, lastName])) {
      return "Error";
    }
    return `${firstName} ${lastName}`;
  }

  // get age() {
  //   return this.getAge();
  // }

  getAge() {
    if (!this.validate([this.data.birthDate])) {
      return "Error";
    }
    const dateArr = this.data.birthDate.split(".");
    const fixedDate = `${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`;
    const age = getYears(fixedDate);

    return `${age} years`;
  }

  // get fullAdress() {
  //   return this.getFullAddress();
  // }

  getFullAddress() {
    if (!this.validate([this.data.address])) {
      return "Error";
    }
    const { country, city, street, house, apartment } = this.data.address;
    if (!this.validate([country, city, street, house])) {
      return "Error";
    }
    return `${country}, ${city}, ${street}, ${house}${
      apartment ? `/${apartment}` : ""
    }`;
  }
}

const elizabeth = new PersonClass(Elizabeth);
console.log(elizabeth);
console.log(elizabeth.getFullName());
console.log(elizabeth.getAge());
console.log(elizabeth.getFullAddress());

const sarahMay = new PersonClass(SarahMay);
console.log(sarahMay);
console.log(sarahMay.getFullName());
console.log(sarahMay.getAge());
console.log(sarahMay.getFullAddress());

const jeremieBrown = new PersonClass(JeremieBrown);
console.log(jeremieBrown);
console.log(jeremieBrown.getFullName());
console.log(jeremieBrown.getAge());
console.log(jeremieBrown.getFullAddress());

module.exports = { PersonClass, Elizabeth, SarahMay, JeremieBrown };
