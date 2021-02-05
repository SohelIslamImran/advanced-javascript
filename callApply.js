const normalPerson = {
    firstName: 'Abdur',
    lastName: 'Rahim',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alam',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 30000,
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(6000);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.call(heroPerson, 2000);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 4000);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [2000]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [4000]);
console.log(friendlyPerson.salary);