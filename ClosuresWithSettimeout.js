function x() {
    for(var i = 1;i <= 5;i++) { // Variables declared in for loop initialization are available between {}
        // this forms Closure(x) and by the time JavaScript push back the set timeout callback
        // to the call stack(after time out) for execution the last value for i was 6.
        // So, every call back will remember the reference to it. but not the value.
        // So, All callbacks will print 6.
        setTimeout(function() {
            console.log("printMe triggered.", i);
        }, i*1000); // O/p - 6 6 6 6 6
    }
}

function x2() {
    for(let i = 1;i <= 5;i++) { // let variables are block scoped variables. so for each iteration a new variable will get created
        setTimeout(function() {
            console.log("printMe triggered.", i);
        }, i*1000);// O/p - 1 2 3 4 5
    }
}

function x3() {
    let i;
    for(i = 1;i <= 5;i++) { // Here we declared i at the function scope level. 
        setTimeout(function() {
            console.log("printMe triggered.", i);
        }, i*1000); // 6 6 6 6 6 
    }
}

// Here's the code breakdown for better understanding.
function fooVar() { // O/p - 2 2 2
    {
        var i = 0;
        setTimeout(function() {
            console.log("i is ", i);
        }, 1000);
    }

    {
        var i = 1;
        setTimeout(function() {
            console.log("i is ", i);
        }, 1000);
    }

    {
        var i = 2;
        setTimeout(function() {
            console.log("i is ", i);
        }, 1000);
    }
}

function fooLet() { // O/p - 0 1 2 
    {
        let i = 0;
        setTimeout(function() {
            console.log("i is ", i);
        }, 1000);
    }

    {
        let i = 1;
        setTimeout(function() {
            console.log("i is ", i);
        }, 1000);
    }

    {
        let i = 2;
        setTimeout(function() {
            console.log("i is ", i);
        }, 1000);
    }
}
