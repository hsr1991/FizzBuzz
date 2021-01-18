function FizzBuzz() {
    for(var i = 1; i<=100; i++) { 
    if (Number.isInteger(i/3)) {
    console.log('Fizz')
    } else{
    console.log(i)
    }
    }
    }
    FizzBuzz()