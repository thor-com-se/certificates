// Task 1
function addTwoNumbs(a, b) {
    console.log(a + b);
}

// Task 2
function addTwoNumbs(a, b) {
    console.log(a + b);
}

addTwoNumbs(5, "5");

// Task 3
function addTwoNumbs(a, b) {
    try {
        console.log(a + b);
    } catch(error) {
        console.log(error);
    }
}

// Task 4
function addTwoNumbs(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch(error) {
        console.log(error);
    }
}

// Task 5
function addTwoNumbs(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch(error) {
        console.log("Error!", error);
    }
}

// Task 6
function addTwoNumbs(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch(error) {
        console.log("Error!", error);
    }
}

addTwoNumbs(5, "5");

// Task 7
function addTwoNumbs(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch(error) {
        console.log("Error!", error);
    }
}

addTwoNumbs(5, "5");
console.log("It still works");