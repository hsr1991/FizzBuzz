function FizzBuzz() { 
    for(var i = 1; i<=100; i++) {
    if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
        console.log('FizzBuzz') 
    }  if (Number.isInteger(i/3) && Number.isInteger(i/7)) {
        console.log('FizzBang') 
    } if (Number.isInteger(i/7) && Number.isInteger(i/5)) {
        console.log('FizzBang') 
     } if (Number.isInteger(i/7)) {
            console.log('Bang')
      } if (Number.isInteger(i/3)) {
    console.log('Fizz')
    } if (Number.isInteger(i/5)) {
    console.log('Buzz')
    } else { 
        console.log(i)
      }
     }
    }
    FizzBuzz()