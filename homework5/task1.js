// write a constructor function PersonFunc which accepts the person data like in  file and implements following methods:
// getFullName() => returns string in format "[FirstName] [LastName]", e.g. 'Roman Krychkovskyy';
// getAge() => returns age of person in format "[number] years", e.g. "29 years";
// getFullAddress() => returns address string in format "[country], [city], [street], [house]/[apartment]". Field apartment is optional. E.g. "Ukraine, Lviv, Doroshenka street, 5/8" and "Ukraine, Lviv, Muchna street, 7"
// Please implement error handling in case if some fields are not available.
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

function PersonFunc(data) {
  this.data = data;
}

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

PersonFunc.prototype.getFullName = function () {
  const { firstName, lastName } = this.data;
  if (!this.validate([firstName, lastName])) {
    return "Error";
  }
  return `${firstName} ${lastName}`;
};

PersonFunc.prototype.getAge = function () {
  if (!this.validate([this.data.birthDate])) {
    return "Error";
  }
  const dateArr = this.data.birthDate.split(".");
  const fixedDate = `${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`;
  const age = getYears(fixedDate);

  return `${age} years`;
};

PersonFunc.prototype.getFullAddress = function () {
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
};

PersonFunc.prototype.validate = function (fields) {
  return fields.every((field) => !!field);
};

const elizabeth = new PersonFunc(Elizabeth);
console.log(elizabeth);
console.log(elizabeth.getFullName());
console.log(elizabeth.getAge());
console.log(elizabeth.getFullAddress());

const sarahMay = new PersonFunc(SarahMay);
console.log(sarahMay);
console.log(sarahMay.getFullName());
console.log(sarahMay.getAge());
console.log(sarahMay.getFullAddress());

const jemieBrown = new PersonFunc(JeremieBrown);
console.log(jemieBrown);
console.log(jemieBrown.getFullName());
console.log(jemieBrown.getAge());
console.log(jemieBrown.getFullAddress());

module.exports = { PersonFunc, Elizabeth, SarahMay, JeremieBrown };
