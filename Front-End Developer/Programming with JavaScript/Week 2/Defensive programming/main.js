// Step 1
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    for (var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

// Step 2
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    for (var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

// Step 3
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {}
    for (var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

// Step 4
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    }
}

// Step 5
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

// Step 6
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder(10, 20);

// Step 7
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder("cat", "c");