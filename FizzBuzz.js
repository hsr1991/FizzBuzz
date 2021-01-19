    // function FizzBuzz() {
    // var arr = [];
    //     for (var i = 1; i <= 100; i++) {
    //       console.log(arr.push(i))
    //    }
    // if (Number.isInteger(i/11)) {
    //         console.log('Bong')
    // } if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
    //     console.log('FizzBuzz') 
    // } if (Number.isInteger(i/3) && Number.isInteger(i/7)) {
    //     console.log('FizzBang') 
    // } if (Number.isInteger(i/7) && Number.isInteger(i/5)) {
    //     console.log('FizzBang') 
    //  } else if (Number.isInteger(i/7)) {
    //         console.log('Bang')
    //   } if (Number.isInteger(i/3)) {
    // console.log('Fizz')
    // } if (Number.isInteger(i/5)) {
    // console.log('Buzz')
    // } else { 
    //     console.log(i)
    //   }
    //  }
    // }
    // FizzBuzz()

    function FizzBuzz () {
        for (var i = 1; i <=300; i++) {
            var output = [];
            
            if (i%3 === 0) {
                output.push('Fizz')
            }
            if (i%13 === 0) {
                output.push('Fezz')
            }
            if (i%5 === 0) {
                output.push('Buzz')
            }
            if (i%7 === 0) {
                output.push('Bang')
            }
            if (i%11 === 0) {
                output = ['Bong']
            }
            if (i%17===0) {
                output.reverse()
            }
            console.log(output.join(''))
        }
        
    }
    FizzBuzz()
    