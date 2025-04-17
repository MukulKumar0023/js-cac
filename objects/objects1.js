const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

person.greet();