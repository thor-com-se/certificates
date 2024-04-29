// Task 1: Code a Person class
class Person {
    constructor() {
        this.name = "Tom";
        this.age = 20;
        this.energy = 100;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor() {
        super();
        this.xp = 0;
        this.hourlyWage = 10;
    }
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var newIntern = new Worker();
    newIntern.name = "Bob";
    newIntern.age = 21;
    newIntern.energy = 110;
    newIntern.xp = 0;
    newIntern.hourlyWage = 10;
    newIntern.goToWork();
    return newIntern;
}

// Task 4: Code a manager object, methods
function manager() {
    newManager = new Worker();
    newManager.name = "Alice";
    newManager.age = 30;
    newManager.energy = 120;
    newManager.xp = 100;
    newManager.hourlyWage = 30;
    newManager.doSomethingFun();
    return newManager;
}